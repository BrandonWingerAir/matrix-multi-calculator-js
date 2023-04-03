jQuery(document).ready(function($){
    // Add new input row
    $('.form-calculator-btn-add').click(function() { 
        var calculatorContainer = $(this).parents('.form-calculator-container');
        
        calculatorContainer.find('.form-calculator-row:last').append(`<div class="form-calculator-row form-calculator-pad">
            <div class="form-calculator-error-msg"></div>
            <div class="form-calculator-error-desc"></div>

            <div class="form-calculator-grid">
                <input class="form-calculator-percent" type="number" name="form-calculator-percent" value="">
                <input type="text" name="form-calculator-note" value="">
                
                <button class="form-calculator-btn-delete" type="button" name="delbtn" value="Delete">
                    <img src="https://img.icons8.com/sf-regular-filled/96/000000/delete.png"/> <span>Delete</span>
                </button>
            </div>
        </div>`);

        var formRatingRow = calculatorContainer.find('.form-calculator-row:last');

        calculatorContainer.find('.custom-form-calculator').append(formRatingRow);

        calculatorContainer.find('.form-calculator-btn-delete').each(function() {
            $(this).removeAttr("disabled");
        });

        calculatorContainer.find('.form-calculator-btn-delete').css({ 
            "opacity": "100%", 
            "cursor": "pointer", 
            "text-decoration": "underline"
        });
        calculatorContainer.find('.form-calculator-btn-delete').addClass('form-calc-btn-delete-active');

        calculatorContainer.find('.form-calculator-row:last input:first').focus();
    });

    // Delete input row
    $('.custom-form-calculator').on("click", ".form-calculator-btn-delete", function() {
        var calculatorContainer = $(this).parents('.form-calculator-container');

        $(this).closest('.form-calculator-row').remove();
        
        if (calculatorContainer.find('.custom-form-calculator').children().length < 4) {
            calculatorContainer.find('.form-calculator-btn-delete').each(function() {
                $(this).prop('disabled', true);
            });
            calculatorContainer.find('.form-calculator-btn-delete').css({ "opacity": "35%", "cursor": "default", "filter": "initial" });
            calculatorContainer.find('.form-calculator-btn-delete').removeClass('form-calc-btn-delete-active');
        }
    });

    // Clear all rows
    $('.form-calculator-btn-clear').click(function() {
        var calculatorContainer = $(this).parents('.form-calculator-container');

        // Remove validation alerts
        calculatorContainer.find('.form-calculator-percent').css({ "border": "1px solid #424242" });
        calculatorContainer.find('.form-calculator-row').css({ "border-left": "none" });
        calculatorContainer.find('.form-calculator-row').find('.form-calculator-error-msg').empty();
        calculatorContainer.find('.form-calculator-row').find('.form-calculator-error-desc').empty();

        calculatorContainer.find('.form-calculator-results').empty();

        calculatorContainer.find('.form-calculator-percent').each(function() {
                $(this).val('');
            });

            calculatorContainer.find('.form-calculator-btn-delete').each(function() {
                $(this).removeClass('form-calc-btn-delete-active');
            });

            var thisCalculatorContainer = calculatorContainer.find('.custom-form-calculator');

            while (thisCalculatorContainer.children().length > 3) {
                thisCalculatorContainer.children().last().remove();
            }

            calculatorContainer.find('.form-calculator-btn-delete').prop('disabled', true);
            calculatorContainer.find('.form-calculator-btn-delete').css({ "opacity": "35%", "text-decoration": "initial" });
            calculatorContainer.find('.form-calculator-row:nth-of-type(2) input:first').focus();
    });

    // Validate rating inputs
    $('.form-calculator-btn-calc').click(function(e) {
        var fieldValues = [];
        var formValid = true;

        var calculatorContainer = $(this).parents('.form-calculator-container');

        var fieldsToCalculate = calculatorContainer.find('.form-calculator-percent');

        fieldsToCalculate.each(function(i, el) {
            if ($(this).prop('value') === '' || $(this).prop('value')  % 10 !== 0) {
                formValid = false;
                $(this).css({ "border": "3px solid #cd2026" });
                $(this).closest('.form-calculator-row').css({ "border-left": "3px solid #cd2026" });
                $(this).closest('.form-calculator-row').find('.form-calculator-error-msg').html('Enter a valid rating');
                $(this).closest('.form-calculator-row').find('.form-calculator-error-desc').html('Ratings are given in 10% increments.');
            } else if ($(this).val() > 99) {
                formValid = false;
                $(this).css({ "border": "3px solid #cd2026" });
                $(this).closest('.form-calculator-row').css({ "border-left": "3px solid #cd2026" });
                $(this).closest('.form-calculator-row').find('.form-calculator-error-msg').html('100% is the maximum rating');
                $(this).closest('.form-calculator-row').find('.form-calculator-error-desc').html('You can\'t receive a combined rating of more than 100%.');
            } else {
                $(this).css({ "border": "1px solid #424242" });
                $(this).closest('.form-calculator-row').css({ "border-left": "none" });
                $(this).closest('.form-calculator-row').find('.form-calculator-error-msg').empty();
                $(this).closest('.form-calculator-row').find('.form-calculator-error-desc').empty();
            }

            fieldValues.push($(this).val());
        });

        // Ratings Calculation
        if (formValid) {
            var row = {};
            var combinedRating = 0;
            var combinedRow = 0;

            fieldValues.sort().reverse();
            
            // Find combined rating in table
            ratingsTableMap.forEach(function(value, key) {
                if (fieldValues[0] == key) {
                    row = value;

                    Object.keys(row).forEach(key => {
                        if (key == fieldValues[1]) {
                            combinedRating = row[key];
                        }
                    });
                }
            });

            // Check if more than 2 rows
            if (fieldValues.length > 2) {
                fieldValues.splice(0, 2);
                
                fieldValues.forEach(el => {
                    combinedRow = combinedRating;
                    
                    ratingsTableMap.forEach(function(value, key) {
                        if (combinedRow == key) {
                            var additionalRow = value;
                            
                            Object.keys(additionalRow).forEach(key => {
                                if (key == el) {
                                    combinedRating = additionalRow[key];
                                }
                            });
                        }
                    });
                });
            }
            
            // Round Combined Rating
            roundedSum = Math.round(combinedRating / 10) * 10;

            var formResultTitle = '<p class="form-calculator-result-title">Your rating</p>';
            var formResultNumber = '<p class="form-calculator-result">' + roundedSum + '%</p>';

            var formResultNote = '<p class="form-calculator-info"><strong>Note:</strong> The actual combined value of your ratings is ' + combinedRating + '%.</p>';

            var formResultText1 = '<p class="form-calculator-info">We round this value to the nearest 10% to get your rating.</p><hr>';

            var formResultText2 = '<p class="form-calculator-info"><strong>HTML/CSS & JavaScript by:</strong></p>';

            var formResultLink = '<div class="form-calculator-result-link"><a href="http://brandonwinger-air.com" target="_blank">Brandon Winger-Air</a></div>';

            var resultsContainer = calculatorContainer.find('.form-calculator-results')
            resultsContainer.html(formResultTitle + formResultNumber + formResultNote + formResultText1 + formResultText2 + formResultLink);
        }
    });
});