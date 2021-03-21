'use strict';

Connector.trackArtSelector = '.now-playing-art > a > img';

Connector.artistSelector = '.now-playing-details .now-playing-main > div .now-playing-artist';

Connector.trackSelector = '.now-playing-details .now-playing-main > div .now-playing-title';

Connector.playButtonSelector = '.radio-controls .radio-control-play-button > a[title="Play"]';

Connector.playerSelector = '.radio-player-widget';

Connector.isTrackArtDefault = (url) => {
	// This can be changed by station owner to point to a different file, this is just the default.
	return url.includes('generic_song');
};

Connector.currentTimeSelector = '.now-playing-details .now-playing-main .time-display .time-display-played.text-secondary';

Connector.DurationSelector = '.now-playing-details .now-playing-main .time-display .time-display-total.text-secondary';

Connector.getAlbum = () => {
	const stationNameSelector = 'h2.card-title';
	const stationName = Util.getTextFromSelectors(stationNameSelector);
	let currentStation;
	let albumName;

	const xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
			const nowPlaying = JSON.parse(xmlHttp.responseText);
			for (const station in nowPlaying) {
				if (nowPlaying[station].station.name === stationName) {
					currentStation = nowPlaying[station];
				}
			}
			if (currentStation === null) {
				albumName = null;
			}

			albumName = currentStation.now_playing.song.album;
		}
	};
	xmlHttp.open('GET', '/api/nowplaying/', true);
	xmlHttp.send(null);

	return albumName;
};
