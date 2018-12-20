const _encKey = process.env.VUE_APP_ENC_KEY;

export default class EncDec {

	en(encTarget) {
		let keyValue = _encKey;
		let keyRandomNum = Math.floor(Math.random() * 60)+1;
		let encIndex = 0;
		let lastTempNum = 0;
		let encryption = this._utf8Encode(encTarget);
		let tempNumMergeStr = '';

		while (encIndex < encryption.length) {

			keyValue = this._snipString(keyValue,keyRandomNum);

			let lastSwitch = 0;
			let keyValueParse = keyValue + "+/";
			let firstRandomUniCode = encryption.charCodeAt(encIndex++);
			let midRandomUniCode = encryption.charCodeAt(encIndex++);
			let lastRandomUniCode = encryption.charCodeAt(encIndex++);
			let tempNum1 = firstRandomUniCode >> 2;
			let tempNum2 = (firstRandomUniCode & 3) << 4 | midRandomUniCode >> 4;
			let tempNum3 = (midRandomUniCode & 15) << 2 | lastRandomUniCode >> 6;
			let tempNum4 = lastRandomUniCode & 63;

			if (isNaN(midRandomUniCode)) {
				tempNum3 = 64;
				tempNum4 = 64;
			} else if (isNaN(lastRandomUniCode)) {
				tempNum4 = 64
			} else {
				lastSwitch=1;
			}

			let tempNumSumStr = keyValueParse.charAt(tempNum1) + keyValueParse.charAt(tempNum2) + keyValueParse.charAt(tempNum3) + keyValueParse.charAt(tempNum4);

			lastTempNum++;

			if (lastSwitch){
				tempNumSumStr = this._snipString(tempNumSumStr, (lastTempNum%4));
			}

			tempNumMergeStr = tempNumMergeStr + tempNumSumStr;
		}

		return tempNumMergeStr + (keyRandomNum+150).toString(16);
	}

	de(decoding) {
		var keyValue = _encKey;
		var tempNumMergeStr = '';
		var encIndex = 0;
		var lastTempNum = 0;
		var keyParseNum = parseInt(decoding.substr(decoding.length - 2), 16)-150;

		var decodingTarget = decoding.substring(0, decoding.length - 2);
		decodingTarget = decodingTarget.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		if (decodingTarget.length%4 > 0){
			decodingTarget+= Array((decodingTarget.length%4)+1).join('=');
		}

		while (encIndex < decodingTarget.length) {

			keyValue = this._snipString(keyValue,keyParseNum);

			var keyValueParse = keyValue + "+/=";

			var tempNumSumStr = decodingTarget.charAt(encIndex++) + decodingTarget.charAt(encIndex++) + decodingTarget.charAt(encIndex++) + decodingTarget.charAt(encIndex++);

			lastTempNum++;

			if (tempNumSumStr[2] != '=' && tempNumSumStr[3] != '='){
				tempNumSumStr = this._snipString(tempNumSumStr, 4-(lastTempNum%4));
			}


			var tempParseIndex1 = keyValueParse.indexOf(tempNumSumStr[0]);
			var tempParseIndex2 = keyValueParse.indexOf(tempNumSumStr[1]);
			var tempParseIndex3 = keyValueParse.indexOf(tempNumSumStr[2]);
			var tempParseIndex4 = keyValueParse.indexOf(tempNumSumStr[3]);

			var tempNum1 = tempParseIndex1 << 2 | tempParseIndex2 >> 4;
			var tempNum2 = (tempParseIndex2 & 15) << 4 | tempParseIndex3 >> 2;
			var tempNum3 = (tempParseIndex3 & 3) << 6 | tempParseIndex4;

			tempNumMergeStr = tempNumMergeStr + this._getUnicodeStr(tempNum1);

			if (tempParseIndex3 != 64) {
				tempNumMergeStr = tempNumMergeStr + this._getUnicodeStr(tempNum2)
			}

			if (tempParseIndex4 != 64) {
				tempNumMergeStr = tempNumMergeStr + this._getUnicodeStr(tempNum3)
			}
		}

		return this._utf8Decode(tempNumMergeStr);
	}

	_utf8Encode(encode) {

		var encStr = encode.toString().replace(/\r\n/g, '\n');
		var returnStr = '';

		for (var ii = 0; ii < encStr.length; ii++) {
			var unicodeNum = encStr.charCodeAt(ii);
			if (unicodeNum < 128) {
				returnStr += this._getUnicodeStr(unicodeNum);
			} else if (unicodeNum > 127 && unicodeNum < 2048) {
				returnStr += this._getUnicodeStr(unicodeNum >> 6 | 192);
				returnStr += this._getUnicodeStr(unicodeNum & 63 | 128);
			} else {
				returnStr += this._getUnicodeStr(unicodeNum >> 12 | 224);
				returnStr += this._getUnicodeStr(unicodeNum >> 6 & 63 | 128);
				returnStr += this._getUnicodeStr(unicodeNum & 63 | 128);
			}
		}

		return returnStr;
	}

	_utf8Decode(decoding) {

		var returnStr = '';
		var index = 0;

		while (index < decoding.length) {
			var unicodeSrt = decoding.charCodeAt(index);

			if (unicodeSrt < 128) {
				returnStr += this._getUnicodeStr(unicodeSrt);
				index++
			} else if (unicodeSrt > 191 && unicodeSrt < 224) {
				var unicodeSrtTemp = decoding.charCodeAt(index + 1);
				returnStr += this._getUnicodeStr((unicodeSrt & 31) << 6 | unicodeSrtTemp & 63);
				index += 2;
			} else {
				var unicodeSrtTemp = decoding.charCodeAt(index + 1);
				var unicodeSrtTemp2 = decoding.charCodeAt(index + 2);
				returnStr += this._getUnicodeStr((unicodeSrt & 15) << 12 | (unicodeSrtTemp & 63) << 6 | unicodeSrtTemp2 & 63);
				index += 3;
			}
		}

		return returnStr;
	}

	_getUnicodeStr(unicodeNum) {
		return String.fromCharCode(unicodeNum);
	}

	_snipString(str, num) {
		return str.substr(num) + str.substring(0, num);
	}
}
