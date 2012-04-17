module("Example Test");
var exampleString = "Owain Testing jQunit";

test( "My first QUnit test - asserting results", function(){
    // ok( boolean, message )
    ok( true, "the test succeeds");
    ok( true, "the test fails");
    // equal( actualValue, expectedValue, message )
    equal( exampleString, "Owain Testing jQunit", "The value expected is Owain Testing jQunit");
});
