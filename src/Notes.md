Break down of the problem

1. Get the all item and render it.
2. Post then figure out the number of item per page, base on that get the total number of pages it require. Based upn the number break it into array

const totalnumber = Math.ceil(totalitem / perpage);
const numofpages = [...Array(totalnumber + 1).keys()].slice();

then render it.

3. Get the indexoflastitme and indexoffirstitem which whill help to figure out which item to render
4. Add event to page number on click change the current page
5. Add next and prev
6. Add cutsom select to change current page value.
   .
