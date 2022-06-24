/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const studentAsset = require('./lib/studentAsset');

module.exports.StudentAsset = studentAsset;
module.exports.contracts = [studentAsset];
