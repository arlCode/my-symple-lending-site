function createElement(elementType, dynamicText, ...classes) {
    var element = document.createElement(elementType),
        elementText = document.createTextNode(dynamicText);

    element.classList.add(...classes);
    element.appendChild(elementText);

    return element;
}

function generateTestimonials() {
    // var row = document.createElement('div'),
    //     columnWrapper = document.createElement('div'),
    //     testimonialColumn = document.createElement('div'),
    //     blockQuoteElement = document.createElement('blockquote'),
    //     pTag = document.createElement('p'),
    //     testimonialFooter = document.createElement('footer'),
    //     testimonialAuthor = document.createElement('span'),
    //     testimonialStarRating = document.createElement('img');

    // row.classList.add('row', 'justify-content-center');
    // columnWrapper.classList.add('col-12');
    // testimonialColumn.classList.add('col-lg-12');
    // blockQuoteElement.classList.add('blockquote');
    // testimonialFooter.classList.add('blockquote-footer', 'text-right');
    // testimonialAuthor.classList.add('h5', 'text-secondary', 'fw-medium');
    // testimonialStarRating.classList.add('ml-auto');



    testimonialData.map(testimonial => {

        console.log(testimonial.review_title);
        console.log(testimonial.review_body);
        console.log(testimonial.reviewer_name);
        console.log(testimonial.reviewer_country);

        var row = createElement('div', '', ...["row", "justify-content-center"]),
            columnWrapper = createElement('div', '', 'col-12'),
            testimonialColumn = createElement('div', '', 'col-lg-12'),
            blockQuoteElement = createElement('blockquote', '', ...["blockquote"]),
            testimonialText = createElement('p', (testimonial.review_body ? testimonial.review_body : testimonial.review_title)),
            testimonialFooter = createElement('footer', '', ...['blockquote-footer', 'text-right']),
            testimonialAuthor = createElement('span', testimonial.reviewer_name, ...['h5', 'text-secondary', 'fw-medium']),
            testimonialStarRating = createElement('img', '', 'ml-auto');
        
            testimonialStarRating.src = "../assets/img/stars-5.svg";
        // Testimonial Footer
        testimonialFooter.appendChild(testimonialAuthor);
        testimonialFooter.appendChild(testimonialStarRating);

        // Block Quote Section
        blockQuoteElement.appendChild(testimonialText);
        blockQuoteElement.appendChild(testimonialFooter);

        // Testimonial Column
        testimonialColumn.appendChild(blockQuoteElement);
        testimonialColumn.appendChild(testimonialFooter);

        // Build the Node Structure
        columnWrapper.appendChild(testimonialColumn);
        row.appendChild(columnWrapper);

        $('.custom-testimonials').append(row);
    });
    Carousel();
}

setTimeout(function() {
    generateTestimonials();
}, 500);



