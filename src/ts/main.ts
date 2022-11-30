const DEEPL_NODE_NAME = "DEEPL-INLINE-TRIGGER";
const DEEPL_TOOPTIP_QUERY = "deepl-inline-translate-tooltip";

const deepLOpen = (nodeList: HTMLElement) => {
  if (nodeList.nodeName != DEEPL_NODE_NAME) return;

  const icon = nodeList.shadowRoot?.querySelector(
    'div[data-qa="deepl-inline-translate-menu-icon"]'
  ) as HTMLElement;
  icon.click();
  icon.parentElement?.remove();
};

const observer = new MutationObserver((records) => {
  for (const record of records) {
    for (const nodeList of record.addedNodes) {
      if (nodeList instanceof HTMLElement) {
        deepLOpen(nodeList);
      }
    }
  }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
