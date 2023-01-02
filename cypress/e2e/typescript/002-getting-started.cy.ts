const firstName = "Georgia";
// const nameLength = firstName.length(); -> This is wrong

// Line 2 has this error:
/*
(property) String.length: number
Returns the length of a String object.
This expression is not callable.
Type 'Number' has no call signatures.ts(2349)
*/

// Typescript is smart enough to know that the length property is a number and not a function.
// It gives us a type error on the go and we don't have to wait until runtime to find out.

describe("", () => {
  it("", () => {
    function sayMyName(fullname) {
      cy.log(`You acting kind of shady, ain't callin' me ${fullname}}`);
    }

    // sayMyName("orhun", "akkan"); -> This is wrong

    sayMyName("orhun"); // This is correct

    //-------------------------------------------------------------------//

    interface Painter {
        finish(): boolean;
        ownMaterials: number;
        paint(painting: String): boolean;
    }

    function paintPainting (painter: Painter, painting: String) {
        painter.finish();
        painter.ownMaterials;
        painter.paint(painting); 
        // VSCode gives us the suggestion for this function
    }

    //-------------------------------------------------------------------//

    

  });
});
