# Happy YEG

This is a fun little project that I built. This website was built using React and Tailwind CSS. Perhaps this can become an open source project where people in the city of Edmonton can contribute to the list of restaurants. For now, they're manually being put in. It was a lot of fun to build. Here's how it works:

## Navbar

The navbar is quite small as it's just a single page site.

### Location Select

The "Location Select" button will take you down to the buttons where you pick the locations of the city. More on that in a bit.

### Contact

The "Contact" button is just that, a way to contact me. This will open a contact section where you enter your name, your message, then complete a simple reCaptcha. Then it send me an email with your message. This functionality was possible with EmailJS, which I learned how to use as I was building the site. Honestly, it was very simple to figure out and perhaps I'll write a Medium article about that.

### Search

The Search is quite simple. Just type in the name of the restaurant you're looking for and the list will filter to the characters that you put in. Can't find a restaurant in the list? Let me know in the Contact section!

## Select Location

This part was definitely a learning curve and it definitely took some research to get it going but it was very exciting when I did get it going and I feel like it's worth it. There are four buttons that represent the main sections of the city. North, SOuth, West and Downtown. I might break up Sout with South East and South West in the near future if that group gets too large, but for now South works great.

Click a button and you will only get restaurants for that region. Click it again and then it will go back to show all the restaurants. I'm considering putting an "All" button in case that gets too confusing.

## List of Restaurants

This is pretty self explanitory. This list is dynamic and will change depending on the buttons you press, or the characters you type in the search bar. The list is made up from a JSON file that shows the restaurant name, business hours, happy hour times, drink specials, food specials, and additional notes for anything important that needs to be mentioned.

## Try it out!

Have a look at the site and feel free to provide some feedback. I'll add some screenshots to this as well in the near future and hopefully that helps with understanding how the site works.

[Try it out here](https://happyyeg.com)
