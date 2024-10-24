import React from 'react'
import '../../App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import { Icon, divIcon, point } from 'leaflet'

export const CustomMap = () => {
  // create custom icon
  const customIcon = new Icon({
    iconUrl: require('../../icon/placeholder.png'),
    iconSize: [38, 38] // size of the icon
  })

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true)
    })
  }

  // markers
  const markers = [
    {
      id: 1,
      geocode: [48.86, 2.3522],
      popUp: 'Hello, I am pop up 1'
    },
    {
      id: 2,
      geocode: [48.85, 2.3522],
      popUp: 'Hello, I am pop up 2'
    },
    {
      id: 3,
      geocode: [48.855, 2.34],
      popUp: 'Hello, I am pop up 3'
    }
  ]
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      {/* <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> */}

      {/* WATERCOLOR CUSTOM TILES */}
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
      />
      {/* GOOGLE MAPS TILES */}
      <TileLayer
        attribution='Google Maps'
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url='http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' // terrain
        maxZoom={20}
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />

      <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon} key={marker.id}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
