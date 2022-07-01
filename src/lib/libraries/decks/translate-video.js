/**
 * @fileoverview
 * Utility function to look up whether a translated video exists for a locale.
 */

// TODO: ja-Hira are copies of ja, replace with real ja-Hira when available.
const videos = {
    'Make-Music': {
        'en': 'ir0j8ljsgm',
        'ar': 'gqlmfqx1g4',
        'fr': 't4dw6fn2an',
        'it': '8nm1v1m9zx',
        'pt': '9v4zl8504z',
        'pt-br': '9v4zl8504z',
        'ja': 'iybhyobckr',
        'ja-Hira': 'iybhyobckr'
    },
    'Make-A-Game': {
        'en': '5rp47ys13g',
        'ar': 'dx5pqpaqsy',
        'fr': 'pntfdyyqqk',
        'it': 'vrs1e38944',
        'pt': 'rjst5ng61s',
        'pt-br': 'rjst5ng61s',
        'ja': 'h4q2ea3ojw',
        'ja-Hira': 'h4q2ea3ojw'
    },
    'Chase-Game': {
        'en': 'kusyx9thl5',
        'ar': 'qapon34gsw',
        'fr': '0nszrbo4dt',
        'it': '899b2jmjlu',
        'pt': 'rw6kr9e37n',
        'pt-br': 'rw6kr9e37n',
        'ja': 'wr6ysk8s6d',
        'ja-Hira': 'wr6ysk8s6d'
    },
    'make-it-fly': {
        en: 'zbtdx2dem9'
    },
    'pong-game': {
        en: '8m48dv0ens'
    },
    'talking': {
        en: 'j0208mq4qi'
    }
};

/**
 * Return a video identifier (on our video hosting service)
 * @param {string} videoId key in the videos object, or id string.
 * @param {string} locale locale to look up. If locale is not defined return the id for 'en' by default
 * @return {string} identifier for the video on our video hosting service.
 */
const translateVideo = (videoId, locale) => {
    // if the videoId is not recognized in the videos object, assume it's already a video id on wistia
    if (!videos.hasOwnProperty(videoId)) return videoId;
    if (videos[videoId].hasOwnProperty(locale)) {
        return videos[videoId][locale];
    }
    return videos[videoId].en;
};

export {
    translateVideo
};
