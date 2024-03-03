1) The getPriority function uses any for the blockchain parameter type. This defeats the purpose of TypeScript's type safety.
Solution : Define a type for the blockchain parameter to ensure type safety.

2) The error handling in the useEffect() hook simply logs the error to console. Better to handle it more gracefully, so that the user would know what is going on instead of nothing showing up on the screen.
Solution : Update component to reflect the error.

3) the sortedBalance() uses the useMemo() hook. I feel that this is inefficient if the list is large. It will negate any benefits useMemo() brings. (https://www.linkedin.com/pulse/when-use-usememo-hook-react-deepak-sharma-/) 
Solution : Optimize the sorting and filtering logic. 

4) For the formattedBalances, not sure if its intentional but maybe have more decimal points? Since in the blockchain industry,
even the smallest unit is crucial in the transactions. so have toFixed() without any arguments it will be rounded to nearest whole number.
Solution : State the decimal point? 