const inputs = {
    rectangle: [
        'Jump',
        'Punch',
        'Attack',
        'Defend',
        'Run',
        'Crouch',
        'Climb',
        'Slide',
        'Roll',
        'Dash',
        'Swim',
        'Fly',
        'Shoot',
        'Throw',
        'Block'
    ],

    diamond: [
        'If health < 5',
        'If hunger > 10',
        'If 67 == 67',
        'For each player',
        'While stamina > 0',
        'If score >= 100',
        'If enemy nearby',
        'If time < 60',
        'If coins > 50',
        'If level == 10',
        'If player is alive',
        'If inventory is full',
        'If boss is defeated',
        'If weapon is equipped',
        'If shield is active'
    ],

    pill: [
        'Start',
        'End'
    ],

    parallelogram: [
        '"How old are you?"',
        '"What is your name?"',
        '"Where do you live?"',
        '"What is your favorite color?"',
        '"What is your quest?"',
        '"What is your favorite food?"',
        '"What is your hobby?"',
        '"What is your profession?"',
        '"What is your dream?"',
        '"What is your favorite movie?"',
        '"What is your favorite book?"',
        '"What is your favorite game?"',
        '"What is your favorite song?"',
        '"What is your favorite animal?"',
        '"What is your favorite season?"'
    ]
}

export default function pickRandom(shape: 'rectangle' | 'diamond' | 'pill' | 'parallelogram') {
    let foo = inputs[shape]
    let num = Math.floor(Math.random() * foo.length)

    return foo[num]!
}