import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdk from '../lib/first-cdk-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/first-cdk-stack.ts
//unit test

test('SQS Queue Created', () => {
  const app = new cdk.App();
  //fine grained
    // WHEN
  const stack = new FirstCdk.FirstCdkStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
});
