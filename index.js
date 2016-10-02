/* global hexo */
'use strict';

hexo.extend.deployer.register('rsync-sec', require('./lib/deployer'));
