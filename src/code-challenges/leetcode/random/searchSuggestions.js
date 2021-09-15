/*
Search auto-complete suggestions

The company is building a way to help customers search reviews quicker by providing real-time suggestions 
to search terms when the customer starts typing. When given a minimum of two characters into the search
field the system will suggest at most three keywords from the review word repository. As the customer
continues to type in the reviews search bar the relevant keyword suggestions will update automatically.
Write an algorithm that will output a maximum of three keyword suggestions after each character is typed
by the customer in the search field.

If there are more than three acceptable keywords, return the keywords that are first in alphabetical order.
Only return keyword suggestions after the customer has entered two characters. Keyword suggestions must
start with the characters already typed Both the repository and the customerQuery should be compared in a
case-insensitive way.

Example Input: repository = [ "mobile", "mouse", "moneypot", "monitor", "mousepad" ] customerQuery = "mouse"
Output: ["mobile", "moneypot", "monitor"] ["mouse", "mousepad"] ["mouse", "mousepad"] ["mouse", "mousepad"]

*/

function searchSuggestions(repository, customerQuery) {
    let currentQuery = customerQuery[0].toLowerCase()
    const output = []
    for (let i = 1; i < customerQuery.length; i++) {
        // get currentQuery by adding the letters one by one
        currentQuery += customerQuery[i].toLowerCase()
        const searchResult = []
        // search for matches in repo and add them to searchResult
        repository.forEach(item => {
            item = item.toLowerCase()
            if (item.startsWith(currentQuery)) {
                searchResult.push(item)
            }
        })
        // sort SearchResult alphabetically
        searchResult.sort((a, b) => a.localeCompare(b))
        // trim SearchResult to first three items
        output.push(searchResult.slice(0, 3))
    }
    return output
}


/**
 * Explanations
 1. My approach for this question is a simple loop for each input the user makes. 

 2. The run time complexity is O(n^2), since the loop will run n times and search the repo also n times. 
 */
