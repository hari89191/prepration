javascript features- open source
                     cross platform
                     synchronous
                     single threaded
----------------------------------------------------------------------------------------
Scope -> lifetime visibility of an variable

javascript scopes- global scope
                   functional scope                                                               
                   block scope

global scope- variables declared globally(outside any function)have global scope.                      var can be hoisted
-> global variables can be accessed from anywhere in a javascript program
-> variables declared with var,let&const are quite similar when declared outside a block.

functional scope- 
-> javascript has function scope:each function creates new scope.
variables defined inside a function are not accessible(visible)from outside the function.
variable declared  with var,let & const are quiet similar when declared inside a function.
they all have function scope
-----------------------------------------------------------------------------------------


Hosting -> its javascript interpreter behaviour,it takes all the declaration to the top

----------------------------------------------------------------------------------------------

Temporial deadzone -> we cannot access before initialization,after initialization only we can access

-------------------------------------------------------------------------------------------------------

Global executaion context->
-----------------------------------------------------------------------------------------------------------


Shadowing- > Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to    the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing.
------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------
Block -> This scope restricts the variable that is declared inside a specific block, from access by the outside of the block.
example --> {
            
            }
-------------------------------------------------------------------------------------------------------------------------------------

Closure -> inner function can able to access the parent function local variables by itself but 
          vice versa is not possible is a called closure.
        ->function  bundle together with it's lexical environment.
-------------------------------------------------------------------------------------------------------------------------------------

Lexical environment-
Lexixal -> sequence
---------------------------------------------------------------------------------------------
Function ==> logical group of one or more expressions

//Ways to write a function:

==> function declaration (can be hoisted)
==> function expression (can't hoisted)
==> arrow function (can't hoisted)
-----------------------------------------------------------------------------------------
shallow copy -> 
Deep copy ->
----------------------------------------------------------------------------------
Data types --> primitive(string,boolean,number) nd non-primitive
