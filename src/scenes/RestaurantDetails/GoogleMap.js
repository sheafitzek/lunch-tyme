// react
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import mapStyles from '../../theme/mapStyles';

export class GoogleMap extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			currentRestaurant : {},
		};

		this.map = React.createRef();
	}

	// lifecycle
	componentDidMount() {
		const { currentRestaurant } = this.props;

		const { lat, lng, formattedAddress } = currentRestaurant.location;
		const coordinates = { lat, lng };

		const { name } = currentRestaurant;
		const { phone, formattedPhone } = currentRestaurant.contact || {};

		// map
		const map = new window.google.maps.Map(this.map.current, {
			zoom   : 17,
			center : coordinates,
			styles : mapStyles,
		});

		// marker
		const marker = new window.google.maps.Marker({
			map,
			position : coordinates,
		});

		// infoWindow
		const infoWindowContent = `
			<div id="popup-content">
				<p>${name}</p>
				<div>${formattedAddress[0] || ``}</div>
				<div>${formattedAddress[1] || ``}</div>
				<p>
					<a href="tel:${phone}">${formattedPhone || `(xxx) xxx-xxxx`}</a><br>
					<a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=${coordinates.lat},${coordinates.lng}&amp;z=15&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3"> <span> View on Google Maps </span> </a>
				</p>
			</div>
		`;

		const infoWindow = new window.google.maps.InfoWindow({
			content  : infoWindowContent,
			maxWidth : 200,
		});

		marker.addListener(`click`, () => {
			infoWindow.open(map, marker);
		});

		window.google.maps.event.addListener(map, `click`, () => {
			infoWindow.close();
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.currentRestaurant === prevState.currentRestaurant) {
			return null;
		}

		return {
			currentRestaurant : nextProps.currentRestaurant,
		};
	}

	render() {
		return <div className="map" ref={this.map} />;
	}
}

// types
GoogleMap.propTypes = {
	currentRestaurant : PropTypes.object.isRequired,
};

export default GoogleMap;
