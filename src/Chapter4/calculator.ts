// data:
    // initial amount
    // annual contribution
    // expected return
    // duration

// input parameter for calculateInvestment()
type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

// return parameter for calculateInvestment()
type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

// union type of InvestmentResult and string to allow for error returns (as strings)
type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    // JS Object destructuring
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    // data checking
    if (initialAmount < 0) {
        return 'Initial amount cannot be negative';
    }

    if (duration <= 0) {
        return 'Duration cannot be less than or equal to zero years';
    }

    if (expectedReturn <= 0) {
        return 'Expected return must be at least zero';
    }

    // local variable declarations
    let total = initialAmount; // the amount we start with
    let totalContributions = 0; // we haven't begun contributing yet, so = 0
    let totalInterestEarned = 0; // we haven't begun contributing yet, so = 0

    const annualResults: InvestmentResult[] = []; // investmentResult array type for return starting at 0 for year 0

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`, // string literal with variable injection
            totalAmount: total,
            totalInterestEarned, // the same name for key and variable allows us to omit colon assignment
            totalContributions
        });
    }
    return annualResults;
}

function printResults(results: CalculationResult) {
    // if an error occurs
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearResult of results) {
        console.log(yearResult.year);
        console.log(`Total                 : ${yearResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions   : ${yearResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned : ${yearResult.totalInterestEarned.toFixed(0)}`);
        console.log("------------------------------");
    }

}

const investmentData: InvestmentData = {
    initialAmount: 5000, // dollars
    annualContribution: 500, // dollars
    expectedReturn: 0.08, // percent
    duration: 10 // years
};

const results = calculateInvestment(investmentData);

printResults(results);

// tsc to compile to JS
// node calculator.js to execute
