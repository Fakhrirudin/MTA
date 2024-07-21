$(window).on('load', function(){
    const elem = document.querySelector('.mansory');
    new Masonry(elem, {
        itemSelector: '.mansory-item',
        columnWidth: 200,
        gutter: 20,
        columnWidth: ".mansory-sizer",
        percentPosition: true,
    });

$('.btn-to-top').click(function () {
    $('html', 'body').animate(
        {
            scrollTop: 0,
        },
        1500,
        'easeInOutExpo'
        );
    });
    AOS.init();

    const portofolioIsotope = $(".portofolio-container").isotope({
        itemSelector: ".portofolio-item",
    });

    $(".portofolio-filters li").click(function () {
        $(".portofolio-filters li").removeClass("text-white");
        $(".portofolio-filters li").removeClass("filter-active");
        $(this).addClass("text-white");
        $(this).addClass("filter-active");

        portofolioIsotope.isotope({
            filter: $(this).data("filter"),
        });
        
        AOS.init(); 
    });
});
