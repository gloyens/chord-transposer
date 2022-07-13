# Responsive Website
### Live Demo: https://gloyens.github.io/chord-transposer/

## What is this project?
This website allows you to modify groups of guitar chords to be a step higher or lower (for example, C changes to C# and B respectively). Enter valid guitar chords in the text field, and click the buttons to transpose.

## Aim
This is the first website I have created with JavaScript, and while the primary aim was to practice using JavaScript, the website does serve a useful purpose; that is, transposing guitar chords down. Transposing chords up can be done very easily with just a capo, but going the other way requires changing the chords entirely. This website makes it easier to do so.

It does this through some fairly basic string manipulation. First, the user's input is split into individual chords, and any suffixes (m, m7 etc) are stored for later use. Next, the chord is replaced by the next chord in an array (C goes to C#, which goes to D, and so on), the suffix is re-added and the chords recombined into a single string. The new chords are displayed in the input field, allowing them to be repeatedly transposed.

### Known Issues
- New lines are not preserved.
- There are only a limited number of valid chords (majors, minors, sharps, sevenths, and combinations thereof).
