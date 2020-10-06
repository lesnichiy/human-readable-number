module.exports = function toReadable (number) {
  const dictionaryLessThenTwenty = {
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six',
      7 : 'seven',
      8 : 'eight',
      9 : 'nine',
      10 : 'ten',
      11 : 'eleven',
      12 : 'twelve',
      13 : 'thirteen',
      14 : 'fourteen',
      15 : 'fifteen',
      16 : 'sixteen',
      17 : 'seventeen',
      18 : 'eighteen',
      19 : 'nineteen'
  };

   const dictionaryDozensFromTwenty = {
       2 : 'twenty',
       3 : 'thirty',
       4 : 'forty',
       5 : 'fifty',
       6 : 'sixty',
       7 : 'seventy',
       8 : 'eighty',
       9 : 'ninety'
   };

   let humanReadableNumberString = ``;

   const hundredNumber = Math.trunc(number / 100);
   humanReadableNumberString = hundredNumber ? `${dictionaryLessThenTwenty[hundredNumber]} hundred` : humanReadableNumberString;

   const lastTwoDigitNumber = number % 100;
   const dozensFromTwentyNumber = Math.trunc(lastTwoDigitNumber / 10);
   const lastSingleDigit = lastTwoDigitNumber % 10;

   if (lastTwoDigitNumber >= 20) {
       humanReadableNumberString = hundredNumber
                                    ? `${humanReadableNumberString} ${dictionaryDozensFromTwenty[dozensFromTwentyNumber]}`
                                    : `${dictionaryDozensFromTwenty[dozensFromTwentyNumber]}`;
       if (lastSingleDigit) {
           humanReadableNumberString = `${humanReadableNumberString} ${dictionaryLessThenTwenty[lastSingleDigit]}`
       }
   }
   if (lastTwoDigitNumber <= 19 && lastTwoDigitNumber > 0) {
       humanReadableNumberString = hundredNumber
                                    ? `${humanReadableNumberString} ${dictionaryLessThenTwenty[lastTwoDigitNumber]}`
                                    : `${dictionaryLessThenTwenty[lastTwoDigitNumber]}`;

   }

   return humanReadableNumberString || `zero`;

};
