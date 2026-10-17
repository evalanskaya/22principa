for(const el of document.querySelectorAll('[data-cfg]')){const k=el.dataset.cfg;el.textContent=window.EVA_CONFIG[k]||'НЕ ЗАПОЛНЕНО'}
