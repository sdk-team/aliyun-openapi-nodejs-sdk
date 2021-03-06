
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-01';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} PackageCode - packageCode. required.
   * @param {Integer} Line - line. required.
   * @param {Integer} BaseBandwidth - baseBandwidth. required.
   * @param {Integer} ElasticBandwidth - elasticBandwidth. required.
   * @param {Integer} DomainCount - domainCount. required.
   * @param {Integer} Layer4RuleCount - layer4RuleCount. optional.
   * @param {Integer} BusinessBandwidth - businessBandwidth. required.
   * @param {Boolean} IsAutoRenew - autoRenew. optional. default: false.
   * @param {Integer} AutoRenewDuration - autoRenewPeriod. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'PackageCode')) {
      throw new TypeError('parameter "PackageCode" is required');
    }

    if (!hasOwnProperty(params, 'Line')) {
      throw new TypeError('parameter "Line" is required');
    }

    if (!hasOwnProperty(params, 'BaseBandwidth')) {
      throw new TypeError('parameter "BaseBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'DomainCount')) {
      throw new TypeError('parameter "DomainCount" is required');
    }

    if (!hasOwnProperty(params, 'BusinessBandwidth')) {
      throw new TypeError('parameter "BusinessBandwidth" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PackageCode - packageCode. required.
   * @param {Integer} DomainCount - domainCount. required.
   * @param {Integer} Layer4RuleCount - layer4RuleCount. optional.
   * @param {Integer} BusinessBandwidth - businessBandwidth. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PackageCode')) {
      throw new TypeError('parameter "PackageCode" is required');
    }

    if (!hasOwnProperty(params, 'DomainCount')) {
      throw new TypeError('parameter "DomainCount" is required');
    }

    if (!hasOwnProperty(params, 'BusinessBandwidth')) {
      throw new TypeError('parameter "BusinessBandwidth" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

}

module.exports = Client;
