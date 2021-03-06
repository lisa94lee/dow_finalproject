# dow_finalproject
Lisa Lee's final project

I originally imagined of creating a game where a player would have to "stop" a ball at a "basket" in order to gain points. While my final project does not exactly display my initial thoughts, I did not stray too far from the concept of an interactive game with a randomly moving ball in a canvas. I personally really enjoyed the "canvas" assignment, therefore I was inspired by the idea of being able to freely "draw" in an allotted space. The game that I created is something I'm sure we've all played at some point in our lives, and with the help from w3schools, I was able to create something even better than what I had intended to.

I think that my favorite part of the project is the random background that pops up everytime a player either refreshes the game or runs out of lives. When I was thinking of ways to add "randomness" to the project, I thought that the changing backgrounds would make the game a little bit more interesting. An interesting and useful technique I picked up was the "setinterval/alert" function, where the computer would almost send a message to the user saying "congrats!" or "game over". I find a lot of joy in creating interactive programs so the "alert" aspect is something I like.

There are a few things I would like to continue to work on with my project. I want to be able to move the paddle with the mouse as well. I was wrestling with it, but I coudln't complete it. I want to be able to create multiple levels, where each level gets progressively more difficult. I would make it more difficult by reducing the size of the paddle, and speeding up the movement of the ball. I also want the transition from level to level to be "smooth", so that the score and the number of lives carry over. Once I truly master WebGL, I wish to make my game more 3D looking, because my current game is essentially 2D. 

Breakdown of the more advanced functions/components I used:

1. Inserting of the "score" and "lives": Drawing of the scores and lives themselves was not the difficult part. However, with a simple "+" sign, I learned that I could keep a count. This is a method I was exposed to when learning python, but it was cool to see that keeping a count works simliarly in JavaScript as well.
2. Movement of the paddle in accordance to the keyboard/mouse: This was a new concept for me, but I learned that with mouse and key events, I could make the object move when pressing the right or left key, and hovering the mouse over it.  
3. CollisionDetection function/Disappearing of the bricks: This was probably the most difficult aspect of the project to understand, but it seems like a useful concept to know for when making games. I had to adapt this set of codes from other sources, because it was a crucial component of my game. It simply was not something I could've come up with on my own from scratch. 
4. Set interval/Alert functions: I wanted make my game a little bit more interactive so I looked for ways for the game to either send a message to the player. I also looked for a way for the game to reload on its own when the player lost the game and came across some cool techniques such as "location.reload" or "alert".  

Key References:
- http://www.w3schools.com/games/game_score.asp
- http://www.w3schools.com/js/js_events.asp
- http://javascript.info/tutorial/mouse-events
- http://www.w3schools.com/jsref/met_loc_reload.asp
- http://www.w3schools.com/jsref/met_win_setinterval.asp
- https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection


