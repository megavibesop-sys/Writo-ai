/* ==========================================================
   Writo AI // Advanced 3D Engine & Compiler Logic
   ========================================================== */

// 1. Preset Specifications Database
const presets = {
    "remote-work": {
        title: "The Fall of the 9-to-5 Office",
        text: `The traditional 9-to-5 office model is dead, and it's not coming back. Over the last few years, we've witnessed the largest workplace experiment in human history. The results are clear: productivity didn't collapse; in many cases, it rose. Employees saved hours every day by eliminating commutes, spending more time with their families, and working in environments they control. 

However, remote work isn't a silver bullet. We are now facing new challenges: Zoom fatigue, the blurring of lines between home and work life, and a sense of isolation. Many companies are pushing for a return to the office, citing "collaboration" and "culture." But in reality, this is often driven by a lack of trust and micromanagement. The future belongs to hybrid workspaces and asynchronous communication. Companies that adapt to measure output rather than hours spent at a desk will win the war for talent. Those that force a 100% return to office will watch their best employees leave for competitors.`
    },
    "ai-coding": {
        title: "How AI is Changing Software Engineering",
        text: `AI is not going to replace software engineers, but engineers who use AI will replace those who don't. Large Language Models (LLMs) have completely transformed the day-to-day work of coding. Writing boilerplate, writing unit tests, and debugging syntax errors are now handled in seconds by AI assistants. 

This shift doesn't make developers obsolete; it elevates their role. Developers can now focus on high-level system architecture, security, database optimization, and user experience. Instead of spending hours scouring documentation, they act as editors and architects. The critical skills for the next decade are not memorizing syntax, but problem-solving, prompt construction, system design, and understanding business logic. The code itself is becoming a commodity, but the ability to build reliable, secure, and scalable systems remains highly valuable.`
    },
    "habit-loops": {
        title: "The Science of Building Atomic Habits",
        text: `All habits follow a simple four-step psychological loop: Cue, Craving, Response, and Reward. If you want to change your life, you don't need massive willpower; you need to redesign this loop. The cue triggers the brain to initiate a behavior. The craving is the motivational force behind it. The response is the actual habit you perform. The reward is the end goal of every habit, which teaches the brain if this action is worth remembering.

To build a good habit, make the cue obvious, make the craving attractive, make the response easy, and make the reward satisfying. Conversely, to break a bad habit, reverse these steps: make the cue invisible, the craving unattractive, the response difficult, and the reward unsatisfying. By focusing on 1% improvements every day—atomic habits—the compounding effect will completely transform your outcomes over a year. Willpower is a finite resource; system design is infinite.`
    }
};

// 2. High-Fidelity Pre-written Outputs
const presetOutputs = {
    "remote-work": {
        twitter: [
            "The 9-to-5 office model is dead, and it's not coming back. Here is why companies forcing a 100% Return-to-Office (RTO) are setting themselves up to fail. 🧵👇",
            "1/ Over the past few years, we completed the largest workplace experiment in human history. The consensus? Productivity didn't collapse—it actually increased in many sectors.",
            "2/ Employees saved hundreds of hours by eliminating commutes. That's time reinvested into deep work, physical health, and family. The quality of life index surged.",
            "3/ Yet, many executives are rushing to mandate office returns under the banner of 'culture' and 'spontaneous collaboration.' But is that the real reason?",
            "4/ In many cases, RTO mandates are a symptom of outdated management styles. When managers don't know how to measure output, they fallback to measuring physical presence.",
            "5/ True, remote work has challenges: Zoom fatigue, isolation, and blurred boundaries. But the solution isn't going backward. It's moving forward to async systems.",
            "6/ Asynchronous work requires trust and documentation. You document processes, write clear specs, and judge people on what they build, not when they sit in a chair.",
            "7/ The talent market has shifted forever. Top performers now view flexibility as a non-negotiable compensation benefit, not a luxury.",
            "8/ The best developers, designers, and managers will migrate to companies that trust them. Rigidity will drive your talent straight to your competitors.",
            "9/ The future is hybrid and trust-based. Measure output, not desk time. Adapt or get left behind. What's your company's RTO policy? Let's discuss."
        ],
        linkedin: `The traditional 9-to-5 office model is dead. 

Over the last few years, we completed the largest workplace experiment in human history. The results are clear: productivity rose, commutes disappeared, and employees gained control over their environment.

Despite this, we are seeing a massive push for RTO (Return-to-Office). 

Many executives cite "collaboration" and "culture." But in reality, this is often driven by a lack of trust and micromanagement. 

The future belongs to companies that measure **output** rather than **hours spent at a desk**. 

Here is why:
1. **The Talent War**: Top performers now view flexibility as a baseline requirement, not a perk.
2. **Asynchronous Efficiency**: Moving from endless sync meetings to written async documentation increases deep work time.
3. **Cost Optimization**: Downsizing physical footprints allows reinvestment in talent and R&D.

Companies that force a 100% return to office will watch their best employees leave for competitors who embrace trust and flexibility.

How is your organization adapting to the hybrid future? 

#FutureOfWork #RemoteWork #Leadership #Management #CompanyCulture`,
        script: [
            { time: "0-5s", visual: "Host looking directly at camera, text overlay: 'The 9-to-5 is officially dead.'", audio: "The traditional nine-to-five office is dead, and the companies trying to force people back are setting themselves up for a talent disaster." },
            { time: "5-15s", visual: "Cut to B-roll of empty office spaces vs. busy remote setups, charts showing productivity metrics.", audio: "During the largest workplace experiment in history, remote productivity didn't collapse—it actually rose. Employees saved hours by cutting commutes." },
            { time: "15-28s", visual: "Host gesturing, text overlay: 'Output > Hours'. Close-up shot.", audio: "But many executives are mandating returns under the banner of 'culture.' In reality, it's a lack of trust. Outdated leaders don't know how to measure output, so they measure physical presence." },
            { time: "28-40s", visual: "Text overlay listing '1. Flex talent, 2. Async systems, 3. Downsized real estate'.", audio: "The future belongs to hybrid workspaces and asynchronous communication. The best talent will migrate to companies that trust them." },
            { time: "40-50s", visual: "Host smiling, call to action overlay: 'Subscribe for scaling tips'.", audio: "Rigidity will drive your talent straight to your competitors. Measure results, not desk time. Follow for more future of work insights." }
        ]
    },
    "ai-coding": {
        twitter: [
            "AI is not going to replace software engineers. But engineers who use AI will replace those who don't. Here is how the developer role is transforming. 🧵👇",
            "1/ Large Language Models (LLMs) have commoditized code generation. Writing boilerplate, creating basic unit tests, and debugging simple syntax are now done in seconds.",
            "2/ This is not the end of programming. It is the evolution. The developer's primary job is shifting from 'syntactician' to 'system architect.'",
            "3/ When you don't have to spend hours searching stack overflow for API structures, you can spend hours on high-level system design, security, and performance optimization.",
            "4/ The valuable skills for the next decade will be: Prompt engineering, understanding business logic, system scalability, and security modeling.",
            "5/ Code is becoming cheap to generate, but understanding *why* that code fits into a complex enterprise architecture is more valuable than ever.",
            "6/ AI is a force multiplier. A single engineer can now build and deploy what used to take an entire team. It's the ultimate age for product builders.",
            "7/ Senior engineers must adapt to act as code review editors rather than writers. Juniors must focus on building mental models of large codebases.",
            "8/ Summary: Don't fear the tools; master them. The demand for builders who understand how to solve problems hasn't shrunk—it's expanding."
        ],
        linkedin: `AI is not going to replace software engineers. 

But engineers who use AI will replace those who don't.

We are witnessing a major paradigm shift in software development. Large Language Models (LLMs) have commoditized code generation. Boilerplate, unit tests, and syntax debugging are now solved in seconds.

This doesn't make developers obsolete; it elevates them.

The role of the developer is shifting from **Syntactician** to **System Architect**. 

Instead of searching docs for syntax, developers can focus on:
• High-level system design and architecture
• Security posture and threat modeling
• Database schema optimization and scalability
• Aligning software features with user experience and business goals

In 2026, the code itself is a commodity. The ability to build reliable, secure, and scalable systems is the premium skill.

Don't fear the tools. Master them.

#SoftwareEngineering #ArtificialIntelligence #Technology #Coding #SystemDesign`,
        script: [
            { time: "0-5s", visual: "Host pointing to text graphic: 'AI won't replace you. But...'", audio: "AI is not going to replace software engineers. But software engineers who use AI are going to replace those who don't." },
            { time: "6-18s", visual: "Quick cuts of code editor autocomplete, terminal running scripts.", audio: "Large Language Models have commoditized code generation. Writing boilerplate, basic unit tests, and debugging syntax are now handled in seconds." },
            { time: "18-32s", visual: "Host walking, text overlay: 'Syntactician ➡️ System Architect'.", audio: "This doesn't make developers obsolete; it elevates them. The role is shifting from syntactician to system architect. Developers now act as code editors and system designers." },
            { time: "32-45s", visual: "Text overlay of key skills: '1. Problem Solving, 2. System Design, 3. Business Logic'.", audio: "The critical skills for the next decade aren't memorizing syntax. It's system scalability, security, and solving business problems." },
            { time: "45-55s", visual: "Host smiling, overlay: 'Follow for software architecture playbooks'.", audio: "Master the tools, don't fear them. Follow for more strategies on navigating the future of tech." }
        ]
    },
    "habit-loops": {
        twitter: [
            "Willpower is a finite resource. System design is infinite. Here is the science-backed psychological framework to redesign your habits. 🧵👇",
            "1/ According to cognitive science, every habit follows a simple four-step loop: Cue ➡️ Craving ➡️ Response ➡️ Reward. If you want to change, target the system, not the output.",
            "2/ The Cue is the environmental trigger. The Craving is the motivational energy. The Response is the habit itself. The Reward is the reinforcement that locks it in.",
            "3/ To build a high-performance habit, you must redesign each stage: Make the cue obvious. Make the craving attractive. Make the response easy. Make the reward satisfying.",
            "4/ Conversely, to break destructive loops, reverse the system: Make the cue invisible. Make the craving unattractive. Make the response difficult. Make the reward unsatisfying.",
            "5/ Focus on 1% improvements daily. The compounding effect of small habits over 12 months is mathematically staggering. 1.01^365 = 37.7x improvement.",
            "6/ Most people fail because they try to change their identity before their environment. If you want to read more, put a book on your pillow (Cue) instead of your phone.",
            "7/ Designing systems that automate positive behaviors is the highest leverage action you can take for personal and professional growth.",
            "8/ Summary: Stop relying on motivation. Design systems that make failure difficult and success inevitable. What habit are you trying to build next?"
        ],
        linkedin: `Willpower is a finite resource. System design is infinite.

In leadership and personal development, we often praise "discipline" and "grit." But behavioral psychology tells a different story. 

High performers don't have super willpower—they design environments that require **zero** willpower.

Every human habit follows a four-step loop: 
1. **Cue** (The environmental trigger)
2. **Craving** (The motivational drive)
3. **Response** (The actual action)
4. **Reward** (The psychological reinforcement)

If you want to build high-performance habits in your career or team, stop calling for motivation. Redesign the loop:

✅ **Make the Cue Obvious**: Keep critical resources and documents in sight.
✅ **Make the Craving Attractive**: Align tasks with personal goals and professional milestones.
✅ **Make the Response Easy**: Remove friction. Create 1-click processes.
✅ **Make the Reward Satisfying**: Implement immediate feedback loops and recognition.

By focusing on 1% daily improvements—atomic habits—the compound interest of behavior change will yield massive professional outcomes over time.

What systems are you putting in place this week to make success inevitable?

#BehavioralScience #Habits #SystemDesign #ProfessionalGrowth #Leadership`,
        script: [
            { time: "0-5s", visual: "Host gesturing index finger, overlay: 'Willpower is a myth. System design is everything.'", audio: "Stop relying on willpower. The science shows high performers don't have super discipline—they just design better systems." },
            { time: "5-18s", visual: "Cut to graphics of the loop: Cue ➡️ Craving ➡️ Response ➡️ Reward.", audio: "Every habit follows a four-step psychological loop: Cue, Craving, Response, and Reward. If you want to change, target the system, not the person." },
            { time: "18-32s", visual: "Text overlay of the 4 laws: '1. Obvious, 2. Attractive, 3. Easy, 4. Satisfying'.", audio: "To build a habit, make the cue obvious, craving attractive, response easy, and reward satisfying. To break a bad habit, reverse those laws." },
            { time: "32-45s", visual: "A compounding chart animation showing 1.01^365 equaling 37.7.", audio: "Focus on one percent daily improvements. Tiny atomic habits compound mathematically to make you thirty-seven times better in a year." },
            { time: "45-55s", visual: "Host smiling, overlay: 'Follow for habit design frameworks'.", audio: "Willpower is finite; system design is infinite. Follow for more evidence-based productivity systems." }
        ]
    }
};

// 3. Dynamic Parser & Vocab Engine for Custom Inputs
function generateCustomOutput(inputText, tone, platform) {
    const rawText = inputText.trim() || "Please insert raw input content.";
    const sentences = rawText.split(/[.!?]+\s+/).map(s => s.trim()).filter(s => s.length > 3);
    
    const hook = sentences[0] || "Here is a core perspective worth exploring.";
    const points = sentences.slice(1, 5); 
    const bodyText = points.join(" ") || "Let's decompose this concept further to analyze its parameters.";
    
    // Technical, Mature Tone Vocab Modifiers
    const toneModifiers = {
        professional: {
            prefix: "SYSTEM // SUMMARY ANALYTICS\n\n",
            hookIntro: "A structural shift is occurring: ",
            pointIntro: "Key takeaway: ",
            cta: "How does this map to your operations? Let's discuss.",
            hashtags: "#SystemsDesign #TechnologyStrategy #Scale #Engineering",
            vocab: ["leverage", "paradigm shift", "efficiency factor", "operational matrix", "scalability index"]
        },
        funny: {
            prefix: "CONSOLE // CRITICAL_HEURISTICS\n\n",
            hookIntro: "Unpopular developer perspective: ",
            pointIntro: "Reality check: ",
            cta: "Drop a comment and explain why this compiles incorrectly. ☕️",
            hashtags: "#SoftwareDeveloper #DeveloperProblems #CleanCode #TechHumor",
            vocab: ["spaghetti logic", "compiler hallucination", "brain stack overflow", "unhinged patch", "production hotfix"]
        },
        controversial: {
            prefix: "DISPATCH // DEBATE_BUFFER\n\n",
            hookIntro: "Contrarian thesis: ",
            pointIntro: "The friction: ",
            cta: "This is bound to stir the engineering forums. Present your arguments below.",
            hashtags: "#ContrarianTake #SystemAnalysis #DevOps #EngineeringStandards",
            vocab: ["industry scam", "architectural gaslighting", "technical debt", "structural anti-pattern", "atrophy"]
        },
        inspirational: {
            prefix: "MEM_LOG // LIFE_CYCLES\n\n",
            hookIntro: "Escaping the local maximum: ",
            pointIntro: "Structural evolution: ",
            cta: "Your attention is your limited RAM. Allocate it wisely.",
            hashtags: "#MindsetEngineering #PersonalGrowth #SystemsThinking #TechMindset",
            vocab: ["compounding interest", "escaping legacy loops", "cognitive capacity", "rearchitecting", "deep cycles"]
        },
        educational: {
            prefix: "EXECUTION_PLAYBOOK // STEP_BY_STEP\n\n",
            hookIntro: "Structural framework: ",
            pointIntro: "Step: ",
            cta: "Bookmark this spec folder. Which component will you compile first?",
            hashtags: "#HowTo #SystemsTutorial #DeveloperGuide #Heuristics",
            vocab: ["runbook", "actionable checklist", "modular constraint", "syntactic sugar", "system telemetry"]
        }
    };
    
    const modifier = toneModifiers[tone] || toneModifiers.professional;
    const v = modifier.vocab;
    
    // Generate Twitter Thread
    if (platform === "twitter") {
        const thread = [];
        thread.push(`[THREAD] ${modifier.hookIntro}"${hook}" \n\nLet's unpack the structural elements: 🧵👇`);
        
        if (points.length > 0) {
            points.forEach((p, idx) => {
                const markerWord = v[idx % v.length];
                thread.push(`${idx + 1}/ [${markerWord.toUpperCase()}] ${modifier.pointIntro}${p}`);
            });
        } else {
            thread.push(`1/ [CONCEPT] ${bodyText}`);
        }
        
        thread.push(`[FIN] Redesign your inputs, optimize your outputs. \n\n${modifier.cta}`);
        return thread;
    }
    
    // Generate LinkedIn Post
    if (platform === "linkedin") {
        let bullets = "";
        if (points.length > 0) {
            points.forEach((p, idx) => {
                const keyword = v[idx % v.length].toUpperCase();
                bullets += `▪️ [${keyword}] ${p}\n\n`;
            });
        } else {
            bullets = `▪️ [CORE_PRINCIPLE] ${bodyText}\n\n`;
        }
        
        return `${modifier.prefix}${hook}

${bullets}Conclusion: true efficiency belongs to systems built on trust, clear documentation, and measurable metrics rather than outdated loops.

${modifier.cta}

${modifier.hashtags}`;
    }
    
    // Generate Video Script
    if (platform === "script") {
        const scriptRows = [];
        scriptRows.push({
            time: "0-5s",
            visual: `[SCENE_01] Medium shot, host pointing to code/system flowchart overlay. Text: '${hook.slice(0, 25)}...'`,
            audio: `${modifier.hookIntro} ${hook}`
        });
        
        scriptRows.push({
            time: "5-18s",
            visual: `[SCENE_02] Screen share showing text layout. Overlay: '${v[0].toUpperCase()}'`,
            audio: points[0] ? `${modifier.pointIntro} ${points[0]}` : "Here is the key architectural shift we need to map out."
        });
        
        scriptRows.push({
            time: "18-30s",
            visual: `[SCENE_03] Extreme close-up. Grid overlay fades in. Overlay: '${v[1].toUpperCase()}'`,
            audio: points[1] ? `We must note that ${points[1]}` : "If you analyze the structural nodes, optimization becomes clear."
        });
        
        scriptRows.push({
            time: "30-45s",
            visual: "[SCENE_04] Host smiling, waving. Text overlay: 'COMPILE_SUCCESS // FOLLOW'",
            audio: `${points[2] || bodyText} ${modifier.cta}`
        });
        
        return scriptRows;
    }
    
    return "";
}

// 4. Core Application Mounting
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // DOM References
    const presetSelector = document.getElementById("preset-selector");
    const sourceText = document.getElementById("source-text");
    const charCount = document.getElementById("char-count");
    const clearInputBtn = document.getElementById("clear-input-btn");
    const toneGrid = document.getElementById("tone-grid");
    const platformTabs = document.querySelectorAll(".platform-tab");
    const generateBtn = document.getElementById("generate-btn");
    
    // Telemetry DOM elements
    const telemetryMem = document.getElementById("telemetry-mem");
    const telemetryDensity = document.getElementById("telemetry-density");

    // Preview viewports
    const emptyState = document.getElementById("empty-state");
    const loadingState = document.getElementById("loading-state");
    const loadingMessage = document.getElementById("loading-message");
    const previewContentWrapper = document.getElementById("preview-content-wrapper");
    
    const mockupTwitter = document.getElementById("mockup-twitter");
    const mockupLinkedIn = document.getElementById("mockup-linkedin");
    const mockupScript = document.getElementById("mockup-script");
    
    const tweetsList = document.getElementById("tweets-list");
    const tweetCounter = document.getElementById("tweet-counter");
    const linkedinTextContent = document.getElementById("linkedin-text-content");
    const scriptRowsContainer = document.getElementById("script-rows-container");
    
    const editToggleBtn = document.getElementById("edit-toggle-btn");
    const copyBtn = document.getElementById("copy-btn");
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    // App state variables
    let activePreset = "";
    let activeTone = "professional";
    let activePlatform = "twitter";
    let isEditMode = false;
    let currentOutputs = {
        twitter: [],
        linkedin: "",
        script: []
    };

    // Helper: Character Counter
    const updateCharCount = () => {
        const textLength = sourceText.value.length;
        charCount.textContent = `CHAR_COUNT: ${textLength.toLocaleString()}`;
    };
    sourceText.addEventListener("input", updateCharCount);

    // Event: Preset Selection dropdown
    presetSelector.addEventListener("change", (e) => {
        const key = e.target.value;
        if (presets[key]) {
            sourceText.value = presets[key].text;
            activePreset = key;
            updateCharCount();
            
            sourceText.style.borderColor = "var(--cyan-neon)";
            setTimeout(() => {
                sourceText.style.borderColor = "var(--border-cyber)";
            }, 600);
        }
    });

    // Event: Clear Input
    clearInputBtn.addEventListener("click", () => {
        sourceText.value = "";
        presetSelector.value = "";
        activePreset = "";
        updateCharCount();
        sourceText.focus();
    });

    // Event: Tone Grid click triggers
    toneGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".tone-card");
        if (!card) return;
        
        document.querySelectorAll(".tone-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        
        activeTone = card.dataset.tone;
        
        // Dynamic press down depth click feedback
        card.style.transform = "perspective(1000px) translateZ(-5px)";
        setTimeout(() => {
            card.style.transform = "perspective(1000px) translateZ(0deg)";
        }, 150);
    });

    // Event: Platform Selector Tabs
    platformTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            const btn = e.target.closest(".platform-tab");
            if (!btn) return;
            
            platformTabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
            
            activePlatform = btn.dataset.platform;
            
            if (!previewContentWrapper.classList.contains("hidden")) {
                showActivePlatformMockup();
            }
        });
    });

    // Switch Mockup Display based on active platform
    const showActivePlatformMockup = () => {
        mockupTwitter.classList.add("hidden");
        mockupLinkedIn.classList.add("hidden");
        mockupScript.classList.add("hidden");

        if (activePlatform === "twitter") {
            mockupTwitter.classList.remove("hidden");
            renderTwitterOutput();
        } else if (activePlatform === "linkedin") {
            mockupLinkedIn.classList.remove("hidden");
            renderLinkedInOutput();
        } else if (activePlatform === "script") {
            mockupScript.classList.remove("hidden");
            renderScriptOutput();
        }
    };

    // Event: Content Compiler Generation Trigger
    generateBtn.addEventListener("click", () => {
        const content = sourceText.value.trim();
        if (!content) {
            alert("No input buffer found. Please insert raw text.");
            sourceText.focus();
            return;
        }

        // Show Loading State
        emptyState.classList.add("hidden");
        previewContentWrapper.classList.add("hidden");
        loadingState.classList.remove("hidden");
        generateBtn.disabled = true;
        generateBtn.style.opacity = "0.7";

        // Loading message sequence animation
        const steps = [
            "PARSING_INPUT_BUFFER...",
            "STRUCTURING_SEGMENT_NODES...",
            `TONE_MODIFIERS: ACTIVE [${activeTone.toUpperCase()}]...`,
            "COMPILING_PLATFORM_MATRIX..."
        ];
        
        let stepIdx = 0;
        loadingMessage.textContent = steps[stepIdx];
        
        const messageInterval = setInterval(() => {
            stepIdx++;
            if (stepIdx < steps.length) {
                loadingMessage.textContent = steps[stepIdx];
            }
        }, 300);

        // Simulation compile cycle duration
        setTimeout(() => {
            clearInterval(messageInterval);
            
            // Evaluate if content matches original presets
            let isPresetMatch = false;
            let matchedPresetKey = "";
            
            if (activePreset && presets[activePreset] && content === presets[activePreset].text) {
                isPresetMatch = true;
                matchedPresetKey = activePreset;
            } else {
                for (const [key, presetObj] of Object.entries(presets)) {
                    if (content === presetObj.text) {
                        isPresetMatch = true;
                        matchedPresetKey = key;
                        break;
                    }
                }
            }

            // Generate Output
            if (isPresetMatch && presetOutputs[matchedPresetKey]) {
                const presetData = presetOutputs[matchedPresetKey];
                // For Twitter and Script, we can use the pre-written ones.
                // However, since we now have tone specific variables, let's parse them dynamically to maintain mature tone styles.
                currentOutputs.twitter = generateCustomOutput(content, activeTone, "twitter");
                currentOutputs.linkedin = generateCustomOutput(content, activeTone, "linkedin");
                currentOutputs.script = generateCustomOutput(content, activeTone, "script");
            } else {
                currentOutputs.twitter = generateCustomOutput(content, activeTone, "twitter");
                currentOutputs.linkedin = generateCustomOutput(content, activeTone, "linkedin");
                currentOutputs.script = generateCustomOutput(content, activeTone, "script");
            }

            // Setup Telemetries
            // Memory index (simulate string bytes size)
            const bytesSize = content.length * 2;
            telemetryMem.textContent = bytesSize > 1024 ? `${(bytesSize / 1024).toFixed(2)}kb` : `${bytesSize}b`;
            
            // Density scoring
            const wordCount = content.split(/\s+/).length;
            if (wordCount < 30) {
                telemetryDensity.textContent = "LOW_INFO";
                telemetryDensity.className = "val font-mono crimson";
            } else if (wordCount >= 30 && wordCount < 90) {
                telemetryDensity.textContent = "STABLE";
                telemetryDensity.className = "val font-mono yellow";
            } else {
                telemetryDensity.textContent = "OPTIMAL";
                telemetryDensity.className = "val font-mono success";
            }

            loadingState.classList.add("hidden");
            previewContentWrapper.classList.remove("hidden");
            generateBtn.disabled = false;
            generateBtn.style.opacity = "1";
            
            showActivePlatformMockup();
            lucide.createIcons();
            setEditMode(false);
        }, 1200);
    });

    // Render Platform Previews
    const renderTwitterOutput = () => {
        tweetsList.innerHTML = "";
        const tweets = currentOutputs.twitter;
        tweetCounter.textContent = `N_TWEETS: ${tweets.length}`;

        tweets.forEach((tweet, index) => {
            const tweetItem = document.createElement("div");
            tweetItem.className = "tweet-item";
            
            tweetItem.innerHTML = `
                <div class="tweet-avatar-wrapper">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Avatar" class="tweet-avatar">
                </div>
                <div class="tweet-details">
                    <div class="tweet-user-info">
                        <span class="tweet-display-name">Alex Morgan</span>
                        <span class="tweet-handle">@alexmorgan_ • ${index + 1}h</span>
                    </div>
                    <div class="tweet-text-content" contenteditable="${isEditMode}" data-index="${index}">${tweet}</div>
                    <div class="tweet-footer">
                        <button class="tweet-action"><i data-lucide="message-square"></i> 18</button>
                        <button class="tweet-action"><i data-lucide="repeat"></i> 7</button>
                        <button class="tweet-action"><i data-lucide="heart"></i> 92</button>
                        <button class="tweet-action"><i data-lucide="activity"></i> 2.4K</button>
                        <button class="tweet-action"><i data-lucide="share-2"></i></button>
                    </div>
                </div>
            `;
            tweetsList.appendChild(tweetItem);
            
            const textContent = tweetItem.querySelector(".tweet-text-content");
            textContent.addEventListener("input", (e) => {
                const idx = parseInt(e.target.dataset.index);
                currentOutputs.twitter[idx] = e.target.innerText;
            });
        });
        
        lucide.createIcons();
    };

    const renderLinkedInOutput = () => {
        linkedinTextContent.innerHTML = currentOutputs.linkedin;
        linkedinTextContent.setAttribute("contenteditable", isEditMode ? "true" : "false");
        
        linkedinTextContent.addEventListener("input", (e) => {
            currentOutputs.linkedin = e.target.innerText;
        });
    };

    const renderScriptOutput = () => {
        scriptRowsContainer.innerHTML = "";
        const scriptData = currentOutputs.script;
        
        const totalDuration = scriptData.length * 12; 
        document.getElementById("script-duration").textContent = `EST_DUR: ${totalDuration}S`;

        scriptData.forEach((row, index) => {
            const scriptRow = document.createElement("div");
            scriptRow.className = "script-row script-row-data";
            
            scriptRow.innerHTML = `
                <div class="col-time">${row.time}</div>
                <div class="col-scene" contenteditable="${isEditMode}" data-index="${index}">${row.visual}</div>
                <div class="col-audio" contenteditable="${isEditMode}" data-index="${index}">${row.audio}</div>
            `;
            scriptRowsContainer.appendChild(scriptRow);
            
            const colScene = scriptRow.querySelector(".col-scene");
            const colAudio = scriptRow.querySelector(".col-audio");
            
            colScene.addEventListener("input", (e) => {
                const idx = parseInt(e.target.dataset.index);
                currentOutputs.script[idx].visual = e.target.innerText;
            });
            
            colAudio.addEventListener("input", (e) => {
                const idx = parseInt(e.target.dataset.index);
                currentOutputs.script[idx].audio = e.target.innerText;
            });
        });
    };

    // Edit Mode Toggle
    const setEditMode = (enable) => {
        isEditMode = enable;
        if (isEditMode) {
            editToggleBtn.classList.add("active");
            editToggleBtn.querySelector("span").textContent = "SAVE_EDITS";
            editToggleBtn.querySelector("i").setAttribute("data-lucide", "check");
        } else {
            editToggleBtn.classList.remove("active");
            editToggleBtn.querySelector("span").textContent = "EDIT_MODE";
            editToggleBtn.querySelector("i").setAttribute("data-lucide", "edit-3");
        }
        
        if (activePlatform === "twitter") {
            document.querySelectorAll(".tweet-text-content").forEach(el => {
                el.setAttribute("contenteditable", isEditMode ? "true" : "false");
            });
        } else if (activePlatform === "linkedin") {
            linkedinTextContent.setAttribute("contenteditable", isEditMode ? "true" : "false");
        } else if (activePlatform === "script") {
            document.querySelectorAll(".col-scene, .col-audio").forEach(el => {
                el.setAttribute("contenteditable", isEditMode ? "true" : "false");
            });
        }
        
        lucide.createIcons();
    };

    editToggleBtn.addEventListener("click", () => {
        if (previewContentWrapper.classList.contains("hidden")) return;
        setEditMode(!isEditMode);
    });

    // Helper: Toast Message System
    const showToast = (message, isSuccess = true) => {
        toastMessage.textContent = message;
        const icon = toast.querySelector(".toast-icon");
        if (isSuccess) {
            toast.style.borderColor = "var(--emerald-neon)";
            toast.style.color = "var(--emerald-neon)";
            toast.style.boxShadow = "0 10px 25px rgba(5, 243, 162, 0.15)";
            icon.setAttribute("data-lucide", "check-circle");
        } else {
            toast.style.borderColor = "var(--crimson-neon)";
            toast.style.color = "var(--crimson-neon)";
            toast.style.boxShadow = "0 10px 25px rgba(255, 0, 85, 0.15)";
            icon.setAttribute("data-lucide", "alert-circle");
        }
        lucide.createIcons();
        
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 2200);
    };

    // Clipboard Copy Event
    copyBtn.addEventListener("click", () => {
        if (previewContentWrapper.classList.contains("hidden")) return;
        
        let textToCopy = "";
        
        if (activePlatform === "twitter") {
            textToCopy = currentOutputs.twitter.join("\n\n---\n\n");
        } else if (activePlatform === "linkedin") {
            textToCopy = currentOutputs.linkedin;
        } else if (activePlatform === "script") {
            textToCopy = "TIMECODE | VISUAL SCENE INSTRUCTION | AUDIO SPEECH VOICEOVER\n";
            textToCopy += "=========================================================\n";
            currentOutputs.script.forEach(row => {
                textToCopy += `${row.time} | ${row.visual} | ${row.audio}\n`;
            });
        }
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showToast("COPY_OK // CLIPBOARD");
            })
            .catch(err => {
                console.error("Copy failed: ", err);
                showToast("COPY_FAIL // ERROR", false);
            });
    });

    // ==========================================================
    // 5. 3D Mouse Tilt & Specular Glare Engine
    // ==========================================================
    const setupTiltEngine = () => {
        const tiltCards = document.querySelectorAll(".3d-card");
        
        tiltCards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                
                // Calculate cursor offsets normalized from -0.5 to 0.5
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                // Set bounds (10 degrees max rotation)
                const rotateX = -y * 10;
                const rotateY = x * 10;
                
                // Render 3D Perspective Tilt on target element
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
                
                // Update Specular Glare coordinates CSS variables
                const glareX = e.clientX - rect.left;
                const glareY = e.clientY - rect.top;
                card.style.setProperty("--glare-x", `${glareX}px`);
                card.style.setProperty("--glare-y", `${glareY}px`);
            });
            
            card.addEventListener("mouseleave", () => {
                // Reset card coordinates back to normal
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                card.style.setProperty("--glare-x", "50%");
                card.style.setProperty("--glare-y", "50%");
            });
        });
    };

    // Mount 3D Tilt Events
    setupTiltEngine();
});
