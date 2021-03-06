
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-10-20';
    super(config);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {Long} IsvId - isvId. required.
   */
  onsCloudGetAppkeyList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'IsvId')) {
      throw new TypeError('parameter "IsvId" is required');
    }

    return this.request('OnsCloudGetAppkeyList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Cluster - cluster. optional.
   */
  onsClusterList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsClusterList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsClusterNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsClusterNames', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {Boolean} Detail - detail. optional.
   */
  onsConsumerAccumulate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerAccumulate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   */
  onsConsumerGetConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerGetConnection', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {Long} ResetTimestamp - timestamp. required.
   */
  onsConsumerResetOffset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'ResetTimestamp')) {
      throw new TypeError('parameter "ResetTimestamp" is required');
    }

    return this.request('OnsConsumerResetOffset', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {Boolean} Detail - detail. optional.
   * @param {Boolean} NeedJstack - needJstack. optional.
   */
  onsConsumerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerStatus', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsConsumerTimeSpan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsConsumerTimeSpan', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Relation - relation. required.
   */
  onsEmpowerCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'EmpowerUser')) {
      throw new TypeError('parameter "EmpowerUser" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Relation')) {
      throw new TypeError('parameter "Relation" is required');
    }

    return this.request('OnsEmpowerCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. required.
   * @param {String} Topic - topic. required.
   */
  onsEmpowerDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'EmpowerUser')) {
      throw new TypeError('parameter "EmpowerUser" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsEmpowerDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. required.
   * @param {String} Topic - topic. required.
   */
  onsEmpowerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'EmpowerUser')) {
      throw new TypeError('parameter "EmpowerUser" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsEmpowerList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Key - key. required.
   */
  onsMessageGetByKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('OnsMessageGetByKey', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} MsgId - msgId. required.
   */
  onsMessageGetByMsgId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    return this.request('OnsMessageGetByMsgId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   */
  onsMessageGetByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsMessageGetByTopic', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} ClientId - clientId. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} Topic - topic. required.
   */
  onsMessagePush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsMessagePush', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Tag - tag. optional.
   * @param {String} Key - key. optional.
   * @param {String} Message - message. required.
   */
  onsMessageSend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('OnsMessageSend', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} MsgId - msgId. required.
   */
  onsMessageTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    return this.request('OnsMessageTrace', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} AppName - appName. optional.
   */
  onsPublishCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. optional.
   * @param {String} Topic - topic. required.
   */
  onsPublishDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   */
  onsPublishGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsPublishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsPublishList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsPublishSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsPublishSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsRegionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsRegionList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsSubscriptionCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsSubscriptionCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. optional.
   */
  onsSubscriptionDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsSubscriptionDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsSubscriptionGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsSubscriptionGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsSubscriptionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsSubscriptionList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsSubscriptionSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsSubscriptionSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Cluster - cluster. optional.
   * @param {Integer} QueueNum - queueNum. optional.
   * @param {Boolean} Order - order. optional.
   * @param {Long} Qps - qps. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Appkey - appkey. optional.
   * @param {String} AppName - appName. optional.
   */
  onsTopicCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Cluster - cluster. optional.
   */
  onsTopicDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   */
  onsTopicGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. optional.
   */
  onsTopicList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsTopicList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsTopicSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsTopicSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Boolean} Detail - detail. optional.
   */
  onsTopicStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicStatus', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Cluster - cluster. required.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendClusterInputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('OnsTrendClusterInputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Cluster - cluster. required.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendClusterOutputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('OnsTrendClusterOutputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} HostIp - hostIp. required.
   * @param {String} AppId - appId. optional.
   * @param {String} Metric - metric. optional.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendGetMachineSar(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'HostIp')) {
      throw new TypeError('parameter "HostIp" is required');
    }

    return this.request('OnsTrendGetMachineSar', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendGroupOutputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTrendGroupOutputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendTopicInputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTrendTopicInputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} UserId - userId. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Type - type. required.
   */
  onsWarnAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsWarnAdmin', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Threshold - threshold. required.
   * @param {String} Contacts - contacts. required.
   */
  onsWarnCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'Contacts')) {
      throw new TypeError('parameter "Contacts" is required');
    }

    return this.request('OnsWarnCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsWarnDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsWarnDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnDisable', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Threshold - threshold. required.
   * @param {String} Contacts - contacts. required.
   */
  onsWarnEditor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'Contacts')) {
      throw new TypeError('parameter "Contacts" is required');
    }

    return this.request('OnsWarnEditor', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsWarnEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnEnable', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsWarnList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnList', params, options);
  }

}

module.exports = Client;
