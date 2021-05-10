const btn = document.
    getElementsByClassName("btns");
const preBtn = document.queryselector(".prev-btn");
const nexBtn = document.querySelector("next-btn");

for (let i = 0; i < btn.length; i++) {
  
btn[i].addEventListener('click', () => {
        const slide = document.querySelector
            ('slide ul').children;
        const Indicator = document.querySelector('indictor').children;

        const lastSlideIndex = slide.length - 1;
        const firstSlideIndex = 0;
        const lastIndicatorIndex = Indicator.length - 1;
        const firstIndicatorIndex = 0;

        const firstItem = slide.item(firstSlideIndex);
        const lastItem = slide.item(lastSlideIndex);
        const firstIndicator = Indicator.item(firstIndicatorIndex);
        const lastIndicator = Indicator.item(lastIndicatorIndex);

    if (bt[i] === preBtn) {
        setTimeout(() => {
            firstItem.parentNode.insertBefore(lastItem, firstItem);
            firstIndicator.parentNode.insertBefore(firstIndicator,
                lastIndicator, nextsibling);
        }, 400);
    } else if (btn[i] === nexBtn) {
        setTimeout(() => {
            firstItem.parentNode.insertBefore(firstItem, lastItem.nextSibling);
            firstIndicator.parentNode.insertBefore(lastIndicator,
                firstIndicator);
        }, 400);
    }
        })
}