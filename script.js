const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);

  if (hero) {
    const shift = Math.max(-18, Math.min(18, window.scrollY * 0.018));
    hero.style.setProperty("--hero-y", `${42 + shift}%`);
  }
});

if (hero) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    hero.style.setProperty("--hero-x", `${x.toFixed(2)}%`);
    hero.style.setProperty("--hero-y", `${y.toFixed(2)}%`);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-x", "50%");
    hero.style.setProperty("--hero-y", "42%");
  });
}

const workSamples = {
  automation: {
    kicker: "Automation",
    title: "Zapier CRM Integration",
    description:
      "Step-by-step workflow automation with lead nurture sequencing, CRM synchronization, and reduced manual admin for a cleaner client onboarding process.",
    deliverables: "Workflow map, Zapier build, CRM fields, handoff checklist",
    outcome: "Saved 10+ admin hours per week and improved response speed",
    tools: ["Zapier", "GoHighLevel", "Google Sheets", "Email routing"],
  },
  ecommerce: {
    kicker: "E-commerce",
    title: "Shopify Fashion Boutique",
    description:
      "A polished storefront experience with organized product listings, mobile-first layouts, and customer-friendly shopping paths.",
    deliverables: "Shopify setup, product pages, collection structure, mobile QA",
    outcome: "Created a cleaner buyer journey from product discovery to checkout",
    tools: ["Shopify", "Canva", "Product copy", "Mobile design"],
  },
  branding: {
    kicker: "Branding",
    title: "Full Brand Identity Suite",
    description:
      "A cohesive visual system built to make businesses look professional across websites, social media, proposals, and daily client touchpoints.",
    deliverables: "Logo suite, color palette, typography, brand guideline",
    outcome: "Improved brand recognition and made every customer touchpoint feel consistent",
    tools: ["Canva Pro", "Adobe", "Logo design", "Brand systems"],
  },
  chatbot: {
    kicker: "AI Chatbot",
    title: "24/7 Lead Capture",
    description:
      "A guided chatbot flow that answers common questions, captures customer details, qualifies leads, and routes follow-up tasks.",
    deliverables: "Conversation map, lead fields, automated replies, routing logic",
    outcome: "Reduced repetitive support work while keeping inquiry response fast",
    tools: ["ManyChat", "AI prompts", "Zapier", "Lead capture"],
  },
  funnel: {
    kicker: "Sales Funnel",
    title: "Lead Generation Engine",
    description:
      "A conversion-focused funnel that turns inbound traffic into captured data, booked calls, and automated follow-up sequences.",
    deliverables: "Landing page, opt-in flow, CRM capture, follow-up sequence",
    outcome: "Built a clearer path from first click to qualified sales conversation",
    tools: ["GoHighLevel", "Systeme.io", "Base44", "Copywriting"],
  },
};

const workButtons = document.querySelectorAll("[data-work]");
const workKicker = document.getElementById("work-kicker");
const workTitle = document.getElementById("work-title");
const workDescription = document.getElementById("work-description");
const workDeliverables = document.getElementById("work-deliverables");
const workOutcome = document.getElementById("work-outcome");
const workTools = document.getElementById("work-tools");

function updateWorkPreview(workKey) {
  const sample = workSamples[workKey];

  if (!sample) {
    return;
  }

  workKicker.textContent = sample.kicker;
  workTitle.textContent = sample.title;
  workDescription.textContent = sample.description;
  workDeliverables.textContent = sample.deliverables;
  workOutcome.textContent = sample.outcome;
  workTools.replaceChildren(...sample.tools.map((tool) => {
    const item = document.createElement("li");
    item.textContent = tool;
    return item;
  }));

  workButtons.forEach((button) => {
    const isActive = button.dataset.work === workKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

workButtons.forEach((button) => {
  button.addEventListener("click", () => updateWorkPreview(button.dataset.work));
});
