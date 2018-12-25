import {Basicy, Medicaly, Examine, Basic, Pregnancy, Medical, SideEffect, Patient} from '../Entity/entity';

export const Bc: Basicy[] = [
  {
    keyy: 1,
    idy: 7.1,
    date: '2018.10.11',
    medicineNum: 7.1,
    remark: '过敏停用',
    diagnosis: '一切正常'
  },
  {
    keyy: 2,
    idy: 7.2,
    date: '2018.10.20',
    medicineNum: 7.2,
    remark: null,
    diagnosis: '内伤'
  },
];

export const Md: Medicaly[] = [
  {
    mdkey: 1,
    medicine: '阿司匹林',
    dosage: '1片',
    period: '一天一次',
    time: '早',
  },
  {
    mdkey: 2,
    medicine: '强的松',
    dosage: '2片',
    period: '一天三次',
    time: '早中晚',
  },
  {mdkey: 3,
    medicine: '补佳乐',
    dosage: '1袋',
    period: '两天一次',
    time: '早'
  }
];


export const Ex: Examine[] = [
  {
    exkey: 1,
    way: '血栓检查',
    result: '正常'
  },
  {
    exkey: 2,
    way: '血压检查',
    result: '正常'
  },
  {
    exkey: 3,
    way: '抽血化验',
    result: '正常'
  }
];
export const Bac: Basic[] = [
  {
    BirthNumber: 1,
    Period: '早孕',
    Check: '唐氏筛查',
    Result: '正常',
    Time: '2018-09-01',
  },
  {
    BirthNumber: 1,
    Period: '中孕',
    Check: '',
    Result: '',
    Time: '',
  },
  {
    BirthNumber: 1,
    Period: '晚孕',
    Check: '',
    Result: '',
    Time: '',
  }
];

export const Pre: Pregnancy[] = [
  {
    Number: 1,
    BirthNumber: 1,
    Time: '2018-09-01',
    Complication: 'PGR',
    Symptom: '',
    Duration: '30天',
  },
  {
    Number: 2,
    BirthNumber: 1,
    Time: '2018-09-01',
    Complication: 'PGR',
    Symptom: '',
    Duration: '30天',
  }
];

export const Med: Medical[] = [
  {
    Number: 1,
    BirthNumber: 1,
    Time: '2018-09-01',
    Complication: 'PGR',
    Symptom: '',
    Duration: '30天',
  },
  {
    Number: 2,
    BirthNumber: 1,
    Time: '2018-09-01',
    Complication: 'PGR',
    Symptom: '',
    Duration: '30天',
  }
];
export const patients: Patient[] = [
  {
    key: '1-6',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-8',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-9',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key:'1-10',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key:'1-11',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key:'1-12',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-13',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-14',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-15',
    sex: false,
    name: '许焕丽',
    age: 29,
    phoneNumber: '1898531568'
  },
  {
    key: '1-7',
    sex: true,
    name: '王中华',
    age: 49,
    phoneNumber: '1898531555'
  }
];

export const mockSideEffects: SideEffect[]  = [
  {
    id: '1-1-1',
    eccurDate: '2018-09-30',  //不良反应发生日期
    eccurTime: '17:52:33',  //不良反应发生时间
    symptom: '呕吐，眩晕',     //症状
    reason: '氯化钾注射不良反应',     //发生原因
    lasTime: 0.5   //持续时间
  },
  {
    id: '1-1-2',
    eccurDate: '2018-09-30',  //不良反应发生日期
    eccurTime: '18:22:33',  //不良反应发生时间
    symptom: '心脏骤停',     //症状
    reason: '氯化钾注射导致内环境钾离子不平衡',     //发生原因
    lasTime: 0.1   //持续时间
  }
];

export class Nz {
  panels = [
    {
      active: true,
      name  : 'This is panel header 1',
      arrow : true
    },
    {
      active: false,
      arrow : false,
      name  : 'This is panel header 2'
    }
  ];
}
