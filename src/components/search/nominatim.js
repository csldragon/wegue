// Code modified from: https://github.com/jonataswalker/ol-geocoder version: July 30, 2019
// The MIT License (MIT)
//
// Copyright (c) 2015 Jonatas Walker
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// import LayerVector from 'ol/layer/Vector';
// import SourceVector from 'ol/source/Vector';
// import Point from 'ol/geom/Point';
// import Feature from 'ol/Feature';
// import proj from 'ol/proj';
// import { Photon } from './providers/photon';
import { OpenStreet } from './providers/osm';
// import { MapQuest } from './providers/mapquest';
// import { Bing } from './providers/bing';
// import { OpenCage } from './providers/opencage';
// import { VARS, TARGET_TYPE, PROVIDERS, EVENT_TYPE } from 'konstants';
// import { randomId, flyTo } from 'helpers/mix';
import { json } from './helpers/ajax';
// import {
//   hasClass,
//   addClass,
//   removeClass,
//   createElement,
//   template,
//   removeAllChildren,
// } from 'helpers/dom';
//
// const klasses = VARS.cssClasses;

export const PROVIDERS = {
  OSM: 'osm',
  MAPQUEST: 'mapquest',
  PHOTON: 'photon',
  BING: 'bing',
  OPENCAGE: 'opencage'
};

export const DEFAULT_OPTIONS = {
  provider: PROVIDERS.OSM,
  placeholder: 'Search for an address',
  featureStyle: null,
  // targetType: TARGET_TYPE.GLASS,
  lang: 'en-US',
  limit: 5,
  keepOpen: false,
  preventDefault: false,
  autoComplete: false,
  autoCompleteMinLength: 2,
  debug: false
};

/**
 * @class Nominatim
 */
export class Nominatim {
  /**
   * @constructor
   * @param {Function} base Base class.
   */
  constructor (options) {
    this.lastResult = null;
    this.options = DEFAULT_OPTIONS;
    this.provider = this.newProvider();
  }

  query (q) {
    this.result = [];
    const parameters = this.provider.getParameters({
      query: q,
      key: this.options.key,
      lang: this.options.lang,
      countrycodes: this.options.countrycodes,
      limit: this.options.limit
    });

    if (this.lastQuery === q && this.lastResult) return;

    this.lastQuery = q;

    let ajax = {
      url: parameters.url,
      data: parameters.params
    };

    if (parameters.callbackName) {
      ajax.jsonp = true;
      ajax.callbackName = parameters.callbackName;
    }

    json(ajax)
      .then(res => {
        // eslint-disable-next-line no-console
        this.options.debug && console.info(res);

        // removeClass(this.els.reset, klasses.spin);

        // will be fullfiled according to provider
        let res_ = this.provider.handleResponse(res);
        if (res_) {
          this.createList(res_);
          // this.listenMapClick();
        }
      })
      .catch(err => {
        console.info(err)
      });

    return this.result;
  }

  createList (response) {
    response.forEach(row => {
      switch (this.options.provider) {
        case PROVIDERS.OSM:
          this.result.push({text: row.address.name, value: row});
          break;
        default:
          this.result.push({text: row.address.name, value: row});
      }
    });
    this.lastResult = this.result;
  }

  newProvider () {
    switch (this.options.provider) {
      case PROVIDERS.OSM:
        return new OpenStreet();
      // case PROVIDERS.MAPQUEST:
      //   return new MapQuest();
      // case PROVIDERS.PHOTON:
      //   return new Photon();
      // case PROVIDERS.BING:
      //   return new Bing();
      // case PROVIDERS.OPENCAGE:
      //   return new OpenCage();
      default:
        return this.options.provider;
    }
  }
}
