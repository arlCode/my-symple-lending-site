(() => {

    getMonthlyPayments(parseInt($('.loan-range-calculation').val()));

    $('.loan-range-calculation').on('input change', function (event) {
        getMonthlyPayments(parseInt(event.target.value));
    });
})();


function getMonthlyPayments(loanRangeCalculationValue) {

    const aprRate = .0595,
        monthsLoaned = 60;

    let newLoanAmount = (loanRangeCalculationValue * aprRate) + loanRangeCalculationValue,
        calculation = newLoanAmount / parseInt(monthsLoaned);

    let calculationOutput = ((calculation * 100) / 100).toFixed(2),
        calculationOutputAsString = Number(calculationOutput);

    $('.calculation').html(`$${calculationOutputAsString.toLocaleString("en")}`);
}


$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}