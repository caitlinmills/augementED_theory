// Bucket expansion functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle bucket header clicks
    const bucketHeaders = document.querySelectorAll('.bucket-header');

    bucketHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const bucket = header.parentElement;
            const isExpanded = bucket.classList.contains('expanded');

            // Close all other buckets (accordion behavior)
            document.querySelectorAll('.bucket.expanded').forEach(openBucket => {
                if (openBucket !== bucket) {
                    openBucket.classList.remove('expanded');
                }
            });

            // Toggle current bucket
            bucket.classList.toggle('expanded');

            // Smooth scroll to bucket if expanding
            if (!isExpanded) {
                setTimeout(() => {
                    bucket.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    // Handle theory card clicks (for deep dive pages)
    const theoryCards = document.querySelectorAll('.theory-card');

    theoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking a link
            if (e.target.tagName === 'A') return;

            const isExpanded = card.classList.contains('expanded');

            // Close all other theory cards (accordion behavior)
            document.querySelectorAll('.theory-card.expanded').forEach(openCard => {
                if (openCard !== card) {
                    openCard.classList.remove('expanded');
                }
            });

            // Toggle current card
            card.classList.toggle('expanded');

            // Smooth scroll to card if expanding
            if (!isExpanded) {
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    // Keyboard accessibility
    bucketHeaders.forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });

    theoryCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
});
