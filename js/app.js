const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const dialog = document.querySelector("#settings-dialog");
const dialogTriggers = document.querySelectorAll("#open-dialog, [data-open-dialog]");

function toggleTheme() {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  themeToggle.setAttribute("aria-pressed", String(next === "dark"));
  themeToggle.textContent = next === "dark" ? "☀️ Светлая тема" : "🌙 Сменить тему";
}

themeToggle?.addEventListener("click", toggleTheme);

/* showModal() activates the browser's native modal/top-layer behavior. */
for (const trigger of dialogTriggers) {
  trigger.addEventListener("click", () => {
    if (!dialog.open) dialog.showModal();
  });
}

const form = document.querySelector("#demo-form");
const requiredInputs = form.querySelectorAll("input[required]");

for (const input of requiredInputs) {
  input.addEventListener("blur", () => {
    input.setAttribute("aria-invalid", String(!input.checkValidity()));
  });
  input.addEventListener("input", () => {
    if (input.hasAttribute("aria-invalid")) {
      input.setAttribute("aria-invalid", String(!input.checkValidity()));
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasErrors = false;

  for (const input of requiredInputs) {
    const invalid = !input.checkValidity();
    input.setAttribute("aria-invalid", String(invalid));
    hasErrors ||= invalid;
  }

  document.querySelector("#form-feedback").textContent = hasErrors
    ? "Исправьте поля формы."
    : "Данные прошли проверку.";
});

const alerts = document.querySelector(".alerts-stack");
const initialAlerts = alerts.innerHTML;

alerts.addEventListener("click", (event) => {
  const dismiss = event.target.closest(".ui-alert__dismiss");
  if (dismiss) dismiss.closest(".ui-alert")?.remove();
});

document.querySelector("#restore-alerts").addEventListener("click", () => {
  alerts.innerHTML = initialAlerts;
});

for (const input of document.querySelectorAll(".ui-switch input")) {
  input.addEventListener("change", () => {
    const label = input.closest(".ui-switch").querySelector("strong").textContent;
    document.querySelector("#switch-feedback").textContent =
      `${label}: ${input.checked ? "включено" : "выключено"}`;
  });
}
