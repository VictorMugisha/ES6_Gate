function anagramDifference(w1,w2){
    w1 = w1.toLowerCase();
     w2 = w2.toLowerCase();
 
     // Create frequency maps for each word
     const freqMap1 = {};
     const freqMap2 = {};
 
     for (const char of w1) {
         freqMap1[char] = (freqMap1[char] || 0) + 1;
     }

     
     for (const char of w2) {
         freqMap2[char] = (freqMap2[char] || 0) + 1;
    }
 
     // Calculate the absolute differences in letter counts
     let totalDifference = 0;
 
     for (const char in freqMap1) {
         totalDifference += Math.abs((freqMap1[char] || 0) - (freqMap2[char] || 0));
     }
 
     // Add any additional letters from the second word
     for (const char in freqMap2) {
         if (!freqMap1[char]) {
             totalDifference += freqMap2[char];
         }
     }
 
     return totalDifference;
 }

 let test = anagramDifference("codewars", "hackerrank")
