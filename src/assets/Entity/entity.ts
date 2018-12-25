export class Basicy {
  keyy: number;
  idy: number;
  date: String;
  medicineNum: number;
  remark: String;
  diagnosis: String;
}

export class Medicaly {
  mdkey: number;
  medicine: String;
  dosage: String;
  period: String;
  time: String;
}

export  class Examine {
  exkey: number;
  way: String;
  result: String;
}
export class Basic {
  BirthNumber: number;
  Period: string;
  Check: string;
  Result: string;
  Time: string;
}

export class Pregnancy {
  Number: number;
  BirthNumber: number;
  Time: string;
  Complication: string;
  Symptom: string;
  Duration: string;
}

export class Medical {
  Number: number;
  BirthNumber: number;
  Time: string;
  Complication: string;
  Symptom: string;
  Duration: string;
}
export class Patient {
  key: string;
  sex: boolean;
  name: string;
  age: number;
  phoneNumber: string;
}
export class SideEffect {
  id: string;
  eccurDate: string;  //不良反应发生日期

  eccurTime: string;  //不良反应发生时间
  symptom: string;     //症状
  reason: string;     //发生原因
  lasTime: number;    //持续时间
}
