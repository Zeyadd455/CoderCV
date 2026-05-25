/* ============================================================
   CODE-STYLE CV — Minimal Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== Click-to-copy strings =====
    document.querySelectorAll('.str').forEach(el => {
        el.style.cursor = 'pointer';
        el.title = 'Click to copy';

        el.addEventListener('click', () => {
            const text = el.textContent.replace(/^"|"$/g, '');
            navigator.clipboard.writeText(text).then(() => {
                const original = el.textContent;
                el.textContent = '✓ Copied!';
                el.style.color = '#3fb950';
                setTimeout(() => {
                    el.textContent = original;
                    el.style.color = '';
                }, 1200);
            }).catch(() => {
                // Fallback for no clipboard API
            });
        });
    });

    // ===== Typing cursor blink on active line =====
    let activeLine = null;

    document.querySelectorAll('.line').forEach(line => {
        line.addEventListener('click', () => {
            if (activeLine) {
                activeLine.classList.remove('active-line');
            }
            line.classList.add('active-line');
            activeLine = line;
        });
    });

    // Add active-line CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .active-line {
            background: rgba(255, 255, 255, 0.04) !important;
            box-shadow: inset 2px 0 0 0 #569cd6;
        }
    `;
    document.head.appendChild(style);

    // ===== Keyboard shortcut: Ctrl+P to print =====
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'p') {
            // Let browser default print handle it
        }
    });
});
