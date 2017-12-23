import { Component, OnInit } from '@angular/core';

import { UserAddress } from '../../models/userAddress';
import { UserAddressService } from '../../services/user-address.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  userAddress: UserAddress;
  constructor(private userAddressService: UserAddressService) {
    this.userAddress = new UserAddress();
  }

  ngOnInit() {
    this.userAddressService.getUserAddress().subscribe((userAddress) => {
      this.userAddress = userAddress;
    });
  }
  // onCancelClick() {
  //   alert(this.userAddress);
  // }
  onSaveClick() {
    this.userAddressService.setUserAddress(this.userAddress).subscribe((res) => {
      if (res.code === 0) {
        alert('address changed');
      } else {
        alert('fail');
      }
    });
  }

}
