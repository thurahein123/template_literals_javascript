const rectangleTransformBtn = document.getElementsByClassName("rectangleTransform")[0];
const rectangleTag = document.getElementsByClassName("rectangle")[0];
const cycleTag = document.getElementsByClassName("cycle")[0];
const cycleTransformBtn = document.getElementsByClassName("cycleTransform")[0];

rectangleTransformBtn.addEventListener("click", () => {
    rectangleTag.classList.add("rectangleTransition");
});

cycleTransformBtn.addEventListener("click", () => {
    cycleTag.classList.add("cycleTransition");
});