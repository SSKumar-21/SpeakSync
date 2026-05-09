// ============================================================
//  AI.js  –  SpeakSync AI Coach
//  Uses: Groq API (FREE — 14,400 requests/day, no billing needed)
//  Model: llama-3.3-70b-versatile (fast + very capable)
//
//  HOW TO GET YOUR FREE KEY (takes 1 minute):
//  1. Go to https://console.groq.com
//  2. Sign up with Google / GitHub
//  3. Click "API Keys" → "Create API Key"
//  4. Paste the key below in GROQ_API_KEY
// ============================================================
(function () {

    // ✏️  PASTE YOUR GROQ API KEY HERE
    const GROQ_API_KEY = "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";
  
    const GROQ_MODEL = "llama-3.3-70b-versatile";
    const GROQ_URL   = "https://api.groq.com/openai/v1/chat/completions";
  
    // ============================================================
    //  MAIN ENTRY POINT — called by main JS after every session
    //  data = { topic, transcript, stats, prepTime, speakTime }
    // ============================================================
    window.runAIFeedback = async function (data) {
      setAIStatus("loading");
      showAILoading();
  
      if (!GROQ_API_KEY || GROQ_API_KEY === "YOUR_GROQ_API_KEY_HERE") {
        setAIStatus("error");
        showAIError(
          "No API key found. Open AI.js and paste your Groq key. " +
          "Get a FREE key at console.groq.com — takes 1 minute, no billing needed."
        );
        return;
      }
  
      const prompt = buildPrompt(data);
  
      try {
        const response = await fetch(GROQ_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: GROQ_MODEL,
            messages: [
              {
                role: "system",
                content:
                  "You are an expert public speaking coach for CSE (Computer Science Engineering) students. " +
                  "Give concise, structured, encouraging yet honest feedback. " +
                  "Always respond using EXACTLY the four section headers provided by the user. " +
                  "Do not add any intro text or text outside those four sections.",
              },
              { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_tokens: 900,
          }),
        });
  
        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          const msg = err?.error?.message || `HTTP ${response.status}`;
          if (response.status === 429) {
            throw new Error(
              "Rate limit hit. Groq free tier allows 14,400 requests/day and 30 req/min. Wait a moment and try again."
            );
          }
          if (response.status === 401) {
            throw new Error(
              "Invalid Groq API key. Double-check the key you pasted in AI.js line 16."
            );
          }
          throw new Error(msg);
        }
  
        const json    = await response.json();
        const rawText = json?.choices?.[0]?.message?.content || "";
  
        if (!rawText.trim()) throw new Error("Empty response received from Groq.");
  
        const parsed = parseResponse(rawText);
        setAIStatus("done");
        renderAIFeedback(parsed);
  
      } catch (err) {
        console.error("[AI.js] Groq error:", err.message);
        setAIStatus("error");
        showAIError(err.message || "Unknown error. Contact the Developer.");
      }
    };
  
    // ============================================================
    //  PROMPT BUILDER
    // ============================================================
    function buildPrompt(data) {
      const { topic, transcript, stats, speakTime } = data;
      const topicName     = topic?.t || "Unknown Topic";
      const topicCategory = topic?.c || "General";
      const hasTranscript = transcript && transcript.trim().length > 10;
  
      return `Evaluate this CSE student's impromptu speech session.
  
  SESSION DETAILS:
  - Topic: "${topicName}" (Category: ${topicCategory})
  - Time Spoken: ${speakTime} seconds out of 120 seconds
  - Words Spoken: ${stats.wordCount}
  - Speaking Speed: ${stats.wpm} words per minute
  - Filler Words Detected: ${stats.fillerCount} (um, uh, like, basically, etc.)
  - Sentences Formed: ${stats.sentences}
  - Auto Score: ${stats.score}/100
  
  TRANSCRIPT:
  ${hasTranscript ? `"${transcript.trim()}"` : "(No speech captured — microphone may have been unavailable)"}
  
  Respond using EXACTLY these four section headers. No text outside them:
  
  ##OVERALL_COMMENT##
  2-3 sentences: warm, honest overall assessment. Mention the topic and what stood out positively and what needs work.
  
  ##HOW_TO_GROW##
  Exactly 3 bullet points starting with "- ". Specific, actionable long-term growth advice tied to what you observed.
  
  ##TIPS_TO_IMPROVE##
  Exactly 3 bullet points starting with "- ". Quick practical tips for the NEXT speaking session. Cover delivery, structure, vocabulary.
  
  ##FOCUS_AREAS##
  Exactly 3 bullet points starting with "- ". The 3 most important weaknesses to fix. Be direct and specific.
  
  Keep total response under 350 words.`;
    }
  
    // ============================================================
    //  RESPONSE PARSER — extracts the four sections from AI text
    // ============================================================
    function parseResponse(raw) {
      function extract(tag) {
        const regex = new RegExp(`##${tag}##\\s*([\\s\\S]*?)(?=##|$)`, "i");
        const match = raw.match(regex);
        return match ? match[1].trim() : "";
      }
      return {
        overall : extract("OVERALL_COMMENT"),
        grow    : extract("HOW_TO_GROW"),
        tips    : extract("TIPS_TO_IMPROVE"),
        focus   : extract("FOCUS_AREAS"),
      };
    }
  
    // ============================================================
    //  UI HELPERS
    // ============================================================
    function setAIStatus(status) {
      const badge = document.getElementById("aiStatusBadge");
      if (!badge) return;
      badge.className = "ai-status-badge";
      if (status === "loading") {
        badge.classList.add("ai-status-loading");
        badge.innerHTML = `<span class="ai-spinner"></span> Analyzing...`;
      } else if (status === "done") {
        badge.classList.add("ai-status-done");
        badge.innerHTML = `✦ AI Feedback Ready`;
      } else {
        badge.classList.add("ai-status-error");
        badge.innerHTML = `✕ Unavailable`;
      }
    }
  
    function showAILoading() {
      const loading = document.getElementById("aiLoadingState");
      const content = document.getElementById("aiFeedbackContent");
      const error   = document.getElementById("aiErrorState");
      if (loading) loading.style.display = "block";
      if (content) content.style.display = "none";
      if (error)   error.style.display   = "none";
    }
  
    function showAIError(msg) {
      const loading = document.getElementById("aiLoadingState");
      const content = document.getElementById("aiFeedbackContent");
      const error   = document.getElementById("aiErrorState");
      if (loading) loading.style.display = "none";
      if (content) content.style.display = "none";
      if (error) {
        error.style.display = "block";
        const detail = error.querySelector("div:last-child");
        if (detail) detail.textContent = msg || "AI feedback unavailable. Contact the Developer.";
      }
    }
  
    function renderAIFeedback(parsed) {
      const loading = document.getElementById("aiLoadingState");
      const content = document.getElementById("aiFeedbackContent");
      const error   = document.getElementById("aiErrorState");
  
      if (loading) loading.style.display = "none";
      if (error)   error.style.display   = "none";
      if (!content) return;
  
      const allEmpty = !parsed.overall && !parsed.grow && !parsed.tips && !parsed.focus;
      if (allEmpty) {
        showAIError("AI returned an unexpected format. Contact the Developer.");
        setAIStatus("error");
        return;
      }
  
      content.innerHTML = "";
      content.className = "ai-feedback-content";
  
      function makeSection(title, emoji, text) {
        if (!text) return;
        const block  = document.createElement("div");
        block.className = "ai-section-block";
  
        const header = document.createElement("div");
        header.className = "ai-section-title";
        header.textContent = `${emoji}  ${title}`;
        block.appendChild(header);
  
        const body = document.createElement("div");
        body.className = "ai-section-body";
  
        const lines = text.split("\n").filter(l => l.trim());
        lines.forEach(line => {
          const clean = line.replace(/^[-•*]\s*/, "").trim();
          if (!clean) return;
          if (
            line.trimStart().startsWith("-") ||
            line.trimStart().startsWith("•") ||
            line.trimStart().startsWith("*")
          ) {
            const point = document.createElement("div");
            point.className = "ai-point";
            point.innerHTML = `<div class="ai-point-dot"></div><span>${clean}</span>`;
            body.appendChild(point);
          } else {
            const para = document.createElement("p");
            para.style.marginBottom = "0.5rem";
            para.textContent = clean;
            body.appendChild(para);
          }
        });
  
        block.appendChild(body);
        content.appendChild(block);
      }
  
      makeSection("Overall Assessment", "💬", parsed.overall);
      makeSection("How to Grow",        "📈", parsed.grow);
      makeSection("Tips for Next Time", "💡", parsed.tips);
      makeSection("Focus Areas",        "🎯", parsed.focus);
  
      content.style.display = "block";
  
      setTimeout(() => {
        const section = document.getElementById("aiFeedbackSection");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  
  })(); // IIFE — keeps all variables scoped, prevents duplicate declaration errors