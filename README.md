# Bluebook Deobfuscated

This is a deobfuscated version of the SAT collage board's [Bluebook](https://satsuite.collegeboard.org/digital/digital-practice-preparation/practice-tests/bluebook).

## Why?

I was bored and wanted to see if I could do it. Additionally, I wanted to show that obfuscation is the worst thing a developer can do to protect their code. It's not worth it.

### Code obfuscation is bad.

You shouldn't need to obfuscate client side code. You may bring up that you are pretecting your own intelectual property but most of the time with only a few edgecases, other developers won't want and won't need to copy your code. If you are obfuscating your code to prevent unauthorized access to your servers, then, you need to be doing server side validation. Finaly, people love to look at code and look for exploits. If you obfuscate your code, you are making it harder for people to find exploits and report them to you. Obfuscating makes it such that the only people trying to exploit your code are the ones who want to do harm.

## Is this legal?

It had not been made clear if reverse enginering *JavaScript* code is legal or not, however, the project for the byte-for-byte decompilation of (Super Mario 64)[https://github.com/n64decomp/sm64] has not been taken down, only the PC port using the source code that used the assets in the game.