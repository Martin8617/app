import {
  transaction,
  createTokenData,
  mintTokenData,
  utxo,
} from './testData.json';
import { createZeroOutputTxFromCustomTx, createTx } from '../customTx';

describe('Custom tx', () => {
  it('should return object of transaction at type createToken', () => {
    const tx = createZeroOutputTxFromCustomTx(
      transaction as any,
      createTokenData
    );
    expect(tx.toObject()).toEqual({
      hash: '5653b49511a3917407a7125740459e029b4f2489e4b0ae75e13f177fa268f52c',
      inputs: [
        {
          output: {
            satoshis: 0,
            script: '76a91488d9931ea73d60eaf7e5671efc0552b912911f2a88ac',
          },
          outputIndex: 0,
          prevTxId:
            '983afbde01a436823054aae561f973e4261ce1e331482eb85c462981e99138a3',
          script: '',
          scriptString: '',
          sequenceNumber: 4294967295,
        },
      ],
      nLockTime: 0,
      outputs: [
        {
          satoshis: 0,
          script: 'a9145630ddb88cfdd2ef4b780dfd538ad67292601d6687',
        },
        {
          satoshis: 0,
          script: '6a1944665478540841686d6564546f6b0008000000000000000003',
        },
      ],
      version: 4,
    });
  });

  it('should return object of transaction at type MintToken', () => {
    const tx = createZeroOutputTxFromCustomTx(
      transaction as any,
      mintTokenData
    );
    expect(tx.toObject()).toEqual({
      hash: '5f5dbd447101d88801dbd459d29e897d7e2bcd0aa3f39332dca344062a4ef04d',
      inputs: [
        {
          output: {
            satoshis: 0,
            script: '76a91488d9931ea73d60eaf7e5671efc0552b912911f2a88ac',
          },
          outputIndex: 0,
          prevTxId:
            '983afbde01a436823054aae561f973e4261ce1e331482eb85c462981e99138a3',
          script: '',
          scriptString: '',
          sequenceNumber: 4294967295,
        },
      ],
      nLockTime: 0,
      outputs: [
        {
          satoshis: 0,
          script: 'a9145630ddb88cfdd2ef4b780dfd538ad67292601d6687',
        },
        {
          satoshis: 0,
          script: '6a12446654784d01820000000000000000000000',
        },
      ],
      version: 4,
    });
  });

  it('should return createCustomTx of type createToken', async () => {
    const tx = await createTx(
      utxo,
      'tttw7ZHJumuaLG8wSwQLDJ6B6jj2uqFnmR',
      0,
      createTokenData,
      0
    );
    expect(tx.toObject()).toEqual({
      hash: 'acf4db1b11755ef8f611018039f7610e7771a4afbfcaa681a29a0eea8931bab0',
      inputs: [
        {
          outputIndex: 0,
          prevTxId:
            '983afbde01a436823054aae561f973e4261ce1e331482eb85c462981e99138a3',
          script:
            '483045022100ee7c8feb8db04906cfd5fc5e3fc3a2b42d4daabed4898370335ef3893b1bab1902201d18b3a8a4f70e57f6615635b24e46d3ce236ae62da3b7b9ad2b92f3db61d87c01410414fae33369bc05ded35edcfebf3c69e63df4d3ee3335b52d4e2800a672397843a827b01967dbfd6c0469e32a1babb5dfed081cd8d2d6ab14d23cfb9d7b5cd4b3',
          scriptString:
            '72 0x3045022100ee7c8feb8db04906cfd5fc5e3fc3a2b42d4daabed4898370335ef3893b1bab1902201d18b3a8a4f70e57f6615635b24e46d3ce236ae62da3b7b9ad2b92f3db61d87c01 65 0x0414fae33369bc05ded35edcfebf3c69e63df4d3ee3335b52d4e2800a672397843a827b01967dbfd6c0469e32a1babb5dfed081cd8d2d6ab14d23cfb9d7b5cd4b3',
          sequenceNumber: 4294967295,
        },
      ],
      nLockTime: 0,
      outputs: [
        {
          satoshis: 0,
          script: 'a914f844de65447a18e05384425a68b56813c20d99cf87',
        },
        {
          satoshis: 0,
          script: '6a1944665478540841686d6564546f6b0008000000000000000003',
        },
      ],
      version: 4,
    });
  });
});
