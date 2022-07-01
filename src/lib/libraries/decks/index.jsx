import React from 'react';
import {FormattedMessage} from 'react-intl';

// Text to Speech
import libraryTXTSpeech from './thumbnails/text-to-speech.jpg';

// Make-Music
import libraryMakeMusic from './thumbnails/make-music.jpg';

// Chase-Game
import libraryChaseGame from './thumbnails/chase-game.jpg';

// Make-A-Game
import libraryMakeAGame from './thumbnails/pop-game.jpg';

// Video Sensing
import libraryVideoSens from './thumbnails/video-sensing.jpg';

// Make-it-Fly
import libraryMakeFly from './thumbnails/make-it-fly.jpg';

// Pong
import libraryPong from './thumbnails/pong.jpg';

// Talking Tales
import libraryTalking from './thumbnails/talking.png';

export default {
    
    'Make-A-Game': {
        name: (
            <FormattedMessage
                defaultMessage="Make a Clicker Game"
                description="Name for the 'Make a Clicker Game' how-to"
                id="gui.howtos.make-a-game.name"
            />
        ),
        img: libraryMakeAGame,
        tags: ['games', 'click', 'clicked', 'score'],
        steps: [{
            video: 'Make-A-Game'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Pick A Sprite"
                    description="Step name for 'Pick A Sprite' step"
                    id="gui.howtos.Make-A-Game.step_GamePickSprite"
                />
            ),
            image: 'popGamePickSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Play Sound When Clicked"
                    description="Play Sound When Clicked' step"
                    id="gui.howtos.make-a-game.step_GamePlaySound"
                />
            ),
            image: 'popGamePlaySound'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Create Score Variable"
                    description="Step name for 'Create Score Variable' step"
                    id="gui.howtos.make-a-game.step_GameAddScore"
                />
            ),
            image: 'popGameAddScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="When Clicked Increase Score"
                    description="Step name for 'When Clicked Increase Score' step"
                    id="gui.howtos.make-a-game.step_GameChangeScore"
                />
            ),

            image: 'popGameChangeScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Go to a random position"
                    description="Step name for 'Go to a random position' step"
                    id="gui.howtos.make-a-game.step_Random"
                />
            ),
            image: 'popGameRandomPosition'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Change Color"
                    description="Step name for 'Change Color' step"
                    id="gui.howtos.make-music.step_GameChangeColor"
                />
            ),
            image: 'popGameChangeColor'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Reset Score"
                    description="Step name for 'Reset Score' step"
                    id="gui.howtos.make-music.step_ResetScore"
                />
            ),
            image: 'popGameResetScore'
        }
        ],
        urlId: 'clicker-game'
    },

    'Make-Music': {
        name: (
            <FormattedMessage
                defaultMessage="Make Music"
                description="Name for the 'Make Music' how-to"
                id="gui.howtos.make-music.name"
            />
        ),
        img: libraryMakeMusic,
        tags: ['music', 'sound', 'instrument', 'play', 'song', 'band'],
        steps: [{
            video: 'Make-Music'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Pick an Instrument Sprite "
                    description="Step name for 'Pick an Instrument Sprite' step"
                    id="gui.howtos.Make-Music.step_PickInstrument"
                />
            ),
            image: 'musicPickInstrument'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Play Sound When Clicked"
                    description="Step name for 'Play Sound When Clicked' step"
                    id="gui.howtos.Make-Music.step_PlaySoundClick"
                />
            ),
            image: 'musicPlaySound'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Create a Song"
                    description="Step name for 'Create a Song' step"
                    id="gui.howtos.Make-Music.step_MakeSong"
                />
            ),
            image: 'musicMakeSong'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Drum & Make a Beat"
                    description="Step name for 'Choose a Drum & Make a Beat' step"
                    id="gui.howtos.make-music.step_MakeBeat"
                />
            ),
            image: 'musicMakeBeat'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose the Microphone Sprite & Surprise Beatbox"
                    description="Step name for 'Choose the Microphone Sprite & Surprise Beatbox' step"
                    id="gui.howtos.make-music.step_MakeBeatBox"
                />
            ),
            image: 'musicMakeBeatbox'
        }
        ],
        urlId: 'music'
    },

    'Chase-Game': {
        name: (
            <FormattedMessage
                defaultMessage="Make a Chase Game"
                description="Name for the 'Make a Chase Game' how-to"
                id="gui.howtos.make-a-chase-game.name"
            />
        ),
        img: libraryChaseGame,
        tags: ['games', 'arrow', 'keyboard', 'score'],
        steps: [{
            video: 'Chase-Game'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Backdrop"
                    description="Step name for 'Add a Backdrop' step"
                    id="gui.howtos.Chase-Game.step_BG"
                />
            ),
            image: 'chaseGameAddBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Sprite"
                    description="Step name for 'Add a Sprite' step"
                    id="gui.howtos.chase-game.step_AddOcto"
                />
            ),
            image: 'chaseGameAddSprite1'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move Right & Left With Arrow Keys"
                    description="Step name for 'Move Right & Left With Arrow Keys' step"
                    id="gui.howtos.make-music.step_LeftRight"
                />
            ),
            image: 'chaseGameRightLeft'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move Up & Down With Arrow Keys"
                    description="Step name for 'Move Up & Down With Arrow Keys' step"
                    id="gui.howtos.Chase-Game.step_UpDown"
                />
            ),
            image: 'chaseGameUpDown'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add Another Sprite"
                    description="Step name for 'Add Another Sprite' step"
                    id="gui.howtos.Chase-Game.step_AddStar"
                />
            ),
            image: 'chaseGameAddSprite2'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move Randomly"
                    description="Step name for 'Move Randomly' step"
                    id="gui.howtos.Chase-Game.step_MoveRandom"
                />
            ),
            image: 'chaseGameMoveRandomly'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="In Octopus Sprite, When Touching Play Sound"
                    description="Step name for 'In Octopus Sprite, When Touching Play Sound' step"
                    id="gui.howtos.Chase-Game.step_WhenTouch"
                />
            ),
            image: 'chaseGamePlaySound'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Create Score Variable"
                    description="Step name for 'Create Score Variable"
                    id="gui.howtos.Chase-Game.step_ScoreVariable"
                />
            ),
            image: 'chaseGameAddVariable'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="In Octopus Sprite, When Touching Add Score"
                    description="Step name for 'In Octopus Sprite, When Touching Add Score step"
                    id="gui.howtos.Chase-Game.ScoreWhenTouch"
                />
            ),
            image: 'chaseGameChangeScore'
        }
        ],
        urlId: 'chase-game'
    },

    'Video-Sensing': {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' how-to"
                id="gui.howtos.videosens.name"
            />
        ),
        img: libraryVideoSens,
        steps: [{
            video: '3pd1z110d6'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Add Extension"
                    description="Step name for 'Add Extension' step"
                    id="gui.howtos.videosens.step_addextension"
                />
            ),
            image: 'videoAddExtension'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Pet the Cat"
                    description="Step name for 'Pet the Cat' step"
                    id="gui.howtos.videosens.step_pet"
                />
            ),
            image: 'videoPet'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Animate"
                    description="Step name for 'Animate' step"
                    id="gui.howtos.videosens.step_animate"
                />
            ),
            image: 'videoAnimate'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Pop a Balloon"
                    description="Step name for 'Pop a Balloon' step"
                    id="gui.howtos.videosens.step_pop"
                />
            ),
            image: 'videoPop'
        }
        ],
        urlId: 'video-sensing'
    },

    'make-it-fly': {
        name: (
            <FormattedMessage
                defaultMessage="Make it Fly"
                description="Name for the 'Make it Fly' Make it Fly"
                id="gui.howtos.make-it-fly.name"
            />
        ),
        tags: ['game', 'fly', 'how', 'can', 'animation'],
        img: libraryMakeFly,
        steps: [{
            video: 'zbtdx2dem9'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Sky Background"
                    description="Step name for 'Choose a Sky Background' step"
                    id="gui.howtos.fly.step_stepflyChooseBackdrop"
                />
            ),
            image: 'flyChooseBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Character"
                    description="Step name for 'Choose a Character' step"
                    id="gui.howtos.add-a-move-block.step_stepflyChooseCharacter"
                />
            ),
            image: 'flyChooseCharacter'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Say Something"
                    description="Step name for 'Say Something' step"
                    id="gui.howtos.fly.step_stepflySaySomething"
                />
            ),
            image: 'flySaySomething'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move With Arrow Keys"
                    description="Step name for 'Move With Arrow Keys' step"
                    id="gui.howtos.add-a-move-block.step_stepflyMoveArrows"
                />
            ),
            image: 'flyMoveArrows'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose an Object to Collect"
                    description="Step name for 'Choose an Object to Collect' step"
                    id="gui.howtos.fly.step_stepflyChooseObject"
                />
            ),
            image: 'flyChooseObject'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Make the Object Move"
                    description="Step name for 'Make the Object Move' step"
                    id="gui.howtos.add-a-move-block.step_stepflyFlyingObject"
                />
            ),
            image: 'flyFlyingObject'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Select Your Character"
                    description="Step name for 'Select Your Character' step"
                    id="gui.howtos.add-a-move-block.step_stepflySelectFlyingSprite"
                />
            ),
            image: 'flySelectFlyingSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Score"
                    description="Step name for 'Add a Score' step"
                    id="gui.howtos.add-a-move-block.step_stepflyAddScore"
                />
            ),
            image: 'flyAddScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Keep Score"
                    description="Step name for 'Keep Score' step"
                    id="gui.howtos.add-a-move-block.step_stepflyKeepScore"
                />
            ),
            image: 'flyKeepScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add Scenery"
                    description="Step name for 'Add Scenery' step"
                    id="gui.howtos.add-a-move-block.step_stepflyAddScenery"
                />
            ),
            image: 'flyAddScenery'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move the Scenery"
                    description="Step name for 'Move the Scenery' step"
                    id="gui.howtos.add-a-move-block.step_stepflyMoveScenery"
                />
            ),
            image: 'flyMoveScenery'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Next Costume"
                    description="Step name for 'Change the Scenery' step"
                    id="gui.howtos.add-a-move-block.step_stepflySwitchLooks"
                />
            ),
            image: 'flySwitchLooks'
        }
        ],
        urlId: 'make-it-fly'
    },

    'say-it-out-loud': {
        name: (
            <FormattedMessage
                defaultMessage="Create Animations That Talk"
                description="Name for the 'Create Animations That Talk' how-to"
                id="gui.howtos.say-it-out-loud"
            />
        ),
        img: libraryTXTSpeech,
        steps: [{
            video: 'k54n8uwcty',
            trackingPixel: (
                <img src="https://code.org/api/hour/begin_scratch_talk.png" />
            )
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add the Text to Speech blocks"
                    description="Step name for 'Add the Text to Speech blocks' step"
                    id="gui.howtos.say-it-out-loud.step_AddTXTextension"
                />
            ),
            image: 'speechAddExtension'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Say Something"
                    description="Step name for 'Say Something' step"
                    id="gui.howtos.say-it-out-loud.step_TXTSpeech"
                />
            ),
            image: 'speechSaySomething'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Set a Voice"
                    description="Step name for 'Set a Voice"
                    id="gui.howtos.say-it-out-loud_TXTSetVoice"
                />
            ),
            image: 'speechSetVoice'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move Around"
                    description="Step name for 'Move Around' step"
                    id="gui.howtos.say-it-out-loud.step_TXTMove"
                />
            ),
            image: 'speechMoveAround'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Backdrop"
                    description="Step name for 'Add a Backdrop' step"
                    id="gui.howtos.say-it-out-loud.step_TXTBackdrop"
                />
            ),
            image: 'speechAddBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add Another Character"
                    description="Step name for 'Add Another Character' step"
                    id="gui.howtos.say-it-out-loud.step_TXTAddSprite"
                />
            ),
            image: 'speechAddSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Perform a Song"
                    description="Step name for 'Perform a Song' step"
                    id="gui.howtos.say-it-out-loud.step_TXTSong"
                />
            ),
            image: 'speechSong'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Change Color"
                    description="Step name for 'Change Color' step"
                    id="gui.howtos.say-it-out-loud.step_TXTColor"
                />
            ),
            image: 'speechChangeColor'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Spin Around"
                    description="Step name for 'Spin Around"
                    id="gui.howtos.say-it-out-loud.step_TXTSpin"
                />
            ),
            image: 'speechSpin'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Grow and Shrink"
                    description="Step name for 'Grow and Shrink' step"
                    id="gui.howtos.say-it-out-loud.step_TXTGrow"
                />
            ),
            image: 'speechGrowShrink'
        }
        ],
        urlId: 'animations-that-talk'
    },

    'pong': {
        name: (
            <FormattedMessage
                defaultMessage="Pong Game"
                description="Name for the 'Pong Game' how-to"
                id="gui.howtos.pong"
            />
        ),
        tags: ['pong', 'game'],
        img: libraryPong,
        steps: [{
            video: 'pong-game'
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Backdrop"
                    description="Step name for 'Add a Backdrop' step"
                    id="gui.howtos.pong.step_pongAddBackdrop"
                />
            ),
            image: 'pongAddBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Ball Sprite"
                    description="Step name for 'Add a Ball Sprite' step"
                    id="gui.howtos.pong.step_pongAddBallSprite"
                />
            ),
            image: 'pongAddBallSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Bounce Around"
                    description="Step name for 'Bounce Around' step"
                    id="gui.howtos.pong.step_pongBounceAround"
                />
            ),
            image: 'pongBounceAround'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Paddle"
                    description="Step name for 'Add a Paddle' step"
                    id="gui.howtos.pong.step_pongAddPaddle"
                />
            ),
            image: 'pongAddPaddle'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move the Paddle"
                    description="Step name for 'Move the Paddle' step"
                    id="gui.howtos.pong.step_pongMoveThePaddle"
                />
            ),
            image: 'pongMoveThePaddle'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Select the Ball Sprite"
                    description="Step name for 'Select the Ball Sprite' step"
                    id="gui.howtos.pong.step_pongSelectBallSprite"
                />
            ),
            image: 'pongSelectBallSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add Code to Bounce the Ball Off the Paddle"
                    description="Step name for 'Add Code to Bounce the Ball Off the Paddle' step"
                    id="gui.howtos.pong.step_pongAddMoreCodeToBall"
                />
            ),
            image: 'pongAddMoreCodeToBall'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Score"
                    description="Step name for 'Add a Score' step"
                    id="gui.howtos.pong.step_pongAddAScore"
                />
            ),
            image: 'pongAddAScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose 'Score' from the Menu"
                    description="Step name for 'Choose 'Score' from the Menu' step"
                    id="gui.howtos.pong.step_pongChooseScoreFromMenu"
                />
            ),
            image: 'pongChooseScoreFromMenu'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Insert the 'Change Score' Block"
                    description="Step name for 'Insert the 'Change Score' Block' step"
                    id="gui.howtos.pong.step_pongInsertChangeScoreBlock"
                />
            ),
            image: 'pongInsertChangeScoreBlock'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Reset Score"
                    description="Step name for 'Reset Score' step"
                    id="gui.howtos.pong.step_pongResetScore"
                />
            ),
            image: 'pongResetScore'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add the Line Sprite"
                    description="Step name for 'Add the Line Sprite' step"
                    id="gui.howtos.pong.step_pongAddLineSprite"
                />
            ),
            image: 'pongAddLineSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Game Over"
                    description="Step name for 'Game Over' step"
                    id="gui.howtos.pong.step_pongGameOver"
                />
            ),
            image: 'pongGameOver'
        }
        ],
        urlId: 'pong'
    },

    'talking': {
        name: (
            <FormattedMessage
                defaultMessage="Talking Tales"
                description="Name for the 'Talking Tales' how-to"
                id="gui.howtos.talking"
            />
        ),
        tags: ['talking'],
        img: libraryTalking,
        steps: [{
            video: 'talking'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Click to Add the Text-to-Speech Blocks"
                    description="Step name for 'Click to Add the Text-to-Speech Blocks' step"
                    id="gui.howtos.talking.step_talesAddExtension"
                />
            ),
            image: 'talesAddExtension'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Sprite"
                    description="Step name for 'Choose a Sprite' step"
                    id="gui.howtos.talking.step_talesChooseSprite"
                />
            ),
            image: 'talesChooseSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Make a Character Speak"
                    description="Step name for 'Make a Character Speak' step"
                    id="gui.howtos.talking.step_talesSaySomething"
                />
            ),
            image: 'talesSaySomething'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Backdrop"
                    description="Step name for 'Choose a Backdrop' step"
                    id="gui.howtos.talking.step_talesChooseBackdrop"
                />
            ),
            image: 'talesChooseBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Click a Character to Go to the Next Backdrop"
                    description="Step name for 'Click a Character to Go to the Next Backdrop' step"
                    id="gui.howtos.talking.step_talesSwitchBackdrop"
                />
            ),
            image: 'talesSwitchBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose Another Sprite"
                    description="Step name for 'Choose Another Sprite' step"
                    id="gui.howtos.talking.step_talesChooseAnotherSprite"
                />
            ),
            image: 'talesChooseAnotherSprite'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Move Around"
                    description="Step name for 'Move Around' step"
                    id="gui.howtos.talking.step_talesMoveAround"
                />
            ),
            image: 'talesMoveAround'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose Another Backdrop"
                    description="Step name for 'Choose Another Backdrop' step"
                    id="gui.howtos.talking.step_talesChooseAnotherBackdrop"
                />
            ),
            image: 'talesChooseAnotherBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Animate Talking"
                    description="Step name for 'Animate Talking' step"
                    id="gui.howtos.talking.step_talesAnimateTalking"
                />
            ),
            image: 'talesAnimateTalking'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose Another Backdrop"
                    description="Step name for 'Choose Another Backdrop' step"
                    id="gui.howtos.talking.step_talesChooseThirdBackdrop"
                />
            ),
            image: 'talesChooseThirdBackdrop'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Choose a Song to Dance To"
                    description="Step name for 'Choose a Song to Dance To' step"
                    id="gui.howtos.talking.step_talesChooseSound"
                />
            ),
            image: 'talesChooseSound'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Dance Moves"
                    description="Step name for 'Dance Moves' step"
                    id="gui.howtos.talking.step_talesDanceMoves"
                />
            ),
            image: 'talesDanceMoves'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Get the Ask and Answer Blocks from the Sensing Category"
                    description="Step name for 'Get the Ask and Answer Blocks from the Sensing Category' step"
                    id="gui.howtos.talking.step_talesAskAnswer"
                />
            ),
            image: 'talesAskAnswer'
        }
        ],
        urlId: 'talking'
    },

    'wedo2-getting-started': {
        steps: [{
            video: '4im7iizv47'
        }],
        urlId: 'wedo',
        hidden: true
    },

    'ev3-getting-started': {
        steps: [{
            video: 'qgu78c5y7d'
        }],
        urlId: 'ev3',
        hidden: true
    },

    'whats-new': {
        steps: [{
            video: 'mtqymxg0qq'
        }],
        urlId: 'whatsnew',
        hidden: true
    }
};
