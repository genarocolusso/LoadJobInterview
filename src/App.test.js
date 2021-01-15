
import {
  getDate,
  formatPhoneNumber,
  numberWithCommas,
} from "./components/util";
 

test("GetDate month", () => {
  const date = new Date("2021-02-26T14:00:00.000Z");
  const formated = getDate(date, "MMM");
  expect(formated).toBe("Feb");
});

test("GetDate month", () => {
  const LBS = 84000;
  const formated = numberWithCommas(LBS);
  expect(formated).toBe("84,000");
});

test("Format Phone number", () => {
  const phone = "+12120001122";
  const formated = formatPhoneNumber(phone);
  expect(formated).toBe("+1 (212) 000-1122");
});

 