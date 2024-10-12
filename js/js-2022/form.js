(function ($) {

    $('select').wrap('<div class="select"></div>');

    $('.wpcf7-number, .woocommerce-checkout .qty').each(function () {
        var $input = $(this);
        $input.wrap('<div class="qty"></div>');
        $('<button class="step-down">-</button>').insertBefore($input);
        $('<button class="step-up">+</button>').insertAfter($input);
        var step = parseInt($(this).attr('step'));
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        var val = parseInt($(this).attr('value'));

        if (isNaN(step)) {
            step = 1;
            $input.attr('step', step);
        }
        if (isNaN(max)) {
            max = 999;
            $input.attr('max', max);
        }
        if (isNaN(min)) {
            min = 0;
            $input.attr('min', min);
        }

        $input.siblings('.step-down').click(function () {
            if (val > min) {
                val -= step;
                $input.val(val);
            }
            return false;
        });
        $input.siblings('.step-up').click(function () {
            if (val < max) {
                val += step;
                $input.val(val);
            }
            return false;
        });
    });


    $('input[type=range]').each(function (i) {
        $(this).wrap('<div class="range"></div>');
        $(this).closest('.range').append('<div class="range-value">' + $(this).val() + '</div>');
    });

    $('input[type=range]').on('input', function () {
        $(this).trigger('change');
        var val = $(this).val();
        $(this).siblings('.range-value').html(val);
    });

})(jQuery);