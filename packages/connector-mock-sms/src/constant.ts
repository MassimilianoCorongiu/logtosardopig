import { ConnectorType, ConnectorMetadata } from '@logto/connector-types';

export const defaultMetadata: ConnectorMetadata = {
  id: 'mock-short-message-service',
  target: 'mock-sms',
  type: ConnectorType.SMS,
  platform: null,
  name: {
    en: 'Mock SMS Service',
    'zh-CN': 'Mock 短信服务',
    'tr-TR': 'Mock SMS Servis',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'The description of Mock SMS Service.',
    'zh-CN': 'Mock 短信服务的描述。',
    'tr-TR': 'Mock SMS Servis açıklaması.',
  },
  readme: './README.md',
  configTemplate: './docs/config-template.json',
};