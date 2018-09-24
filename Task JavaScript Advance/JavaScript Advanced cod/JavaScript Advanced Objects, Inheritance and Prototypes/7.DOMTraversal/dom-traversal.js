function domTraversal(wrapper) {
    let selector = $(wrapper);
    let maxDepth = 0;
    let maxDepthElement = selector;

    findDeapest(maxDepth, selector);
    maxDepthElement.addClass('highlight');
    maxDepthElement.parents().addClass('highlight');
    selector.parent().removeClass('highlight');

    function findDeapest(depth, element) {
        if (depth > maxDepth) {
            maxDepth = depth;
            maxDepthElement = $(element);
        }

        $(element).children().each((index, el) => findDeapest((depth + 1), el));
    }
}