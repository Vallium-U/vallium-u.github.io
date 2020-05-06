$(function() {

    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();

        let category = $(this).data('filter');
        if (category == 'All') {
            $("[data-category").removeClass("hide");
        } else {
            $("[data-category").each(function() {

                let workCategory = $(this).data('category');
                if (workCategory != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});