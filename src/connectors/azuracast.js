'use strict';

Connector.trackArtSelector = '.now-playing-art > a > img';

Connector.artistSelector = '.now-playing-details .now-playing-main > div .now-playing-artist';

Connector.trackSelector = '.now-playing-details .now-playing-main > div .now-playing-title';

Connector.playButtonSelector = '.radio-controls .radio-control-play-button > a[title="Play"]';

Connector.playerSelector = '.radio-player-widget';

Connector.isTrackArtDefault = (url) => {
	// Self-uploaded tracks could not have cover arts
	return url.includes('generic_song');
};

Connector.currentTimeSelector = '.now-playing-details .now-playing-main .time-display .time-display-played.text-secondary';

Connector.DurationSelector = '.now-playing-details .now-playing-main .time-display .time-display-total.text-secondary';
