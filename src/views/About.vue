<template>
  <div class="About">
    <h1 class="text-center">รายการสินค้า</h1>
    <hr/>
    <header class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">

      <div class="kakzuz"  v-if="$store.state.i1.amount >= 1">
        <img :src="$store.state.i1.image" width="100" />
        <p1> {{ $store.state.i1.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i1.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i1.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i1.amount -= 1"
        >
          -
        </button>
      </div>
      <div  class="kakzuz" v-if="$store.state.i2.amount >= 1">
        <img :src="$store.state.i2.image" width="100" />
        <p1> {{ $store.state.i2.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i2.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i2.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i2.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i3.amount >= 1">
        <img :src="$store.state.i3.image" width="100" />
        <p1> {{ $store.state.i3.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i3.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i3.amount }} </p2>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i3.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i4.amount >= 1">
        <img :src="$store.state.i4.image" width="100" />
        <p1> {{ $store.state.i4.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i4.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i4.amount }} </p2>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i4.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i5.amount >= 1">
        <img :src="$store.state.i5.image" width="100" />
        <p1> {{ $store.state.i5.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i5.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i5.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i5.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i6.amount >= 1">
        <img :src="$store.state.i6.image" width="100" />
        <p1> {{ $store.state.i6.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i6.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i6.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i6.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i7.amount >= 1">
        <img :src="$store.state.i7.image" width="100" />
        <p1> {{ $store.state.i7.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i7.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i7.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i7.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i8.amount >= 1">
        <img :src="$store.state.i8.image" width="100" />
        <p1> {{ $store.state.i8.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i8.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i8.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i8.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i9.amount >= 1">
        <img :src="$store.state.i9.image" width="100" />
        <p1> {{ $store.state.i9.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i9.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i9.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i9.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i10.amount >= 1">
        <img :src="$store.state.i10.image" width="100" />
        <p1> {{ $store.state.i10.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i10.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i10.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i10.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i11.amount >= 1">
        <img :src="$store.state.i11.image" width="100" />
        <p1> {{ $store.state.i11.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i11.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i11.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i11.amount -= 1"
        >
          -
        </button>
      </div>
      <div class="kakzuz" v-if="$store.state.i12.amount >= 1">
        <img :src="$store.state.i12.image" width="100" />
        <p1> {{ $store.state.i12.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i12.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i12.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i12.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i13.amount >= 1">
        <img :src="$store.state.i13.image" width="100" />
        <p1> {{ $store.state.i13.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i13.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i13.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i13.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i14.amount >= 1">
        <img :src="$store.state.i14.image" width="100" />
        <p1> {{ $store.state.i14.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i14.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i14.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i14.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i15.amount >= 1">
        <img :src="$store.state.i15.image" width="100" />
        <p1> {{ $store.state.i15.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i15.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i15.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i15.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i16.amount >= 1">
        <img :src="$store.state.i16.image" width="100" />
        <p1> {{ $store.state.i16.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i16.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i16.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i16.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i17.amount >= 1">
        <img :src="$store.state.i17.image" width="100" />
        <p1> {{ $store.state.i17.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i17.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i17.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i17.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i18.amount >= 1">
        <img :src="$store.state.i18.image" width="100" />
        <p1> {{ $store.state.i18.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i18.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i18.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i18.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i19.amount >= 1">
        <img :src="$store.state.i19.image" width="100" />
        <p1> {{ $store.state.i19.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i19.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i19.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i19.amount -= 1"
        >
          -
        </button>
      </div>
            <div class="kakzuz" v-if="$store.state.i20.amount >= 1">
        <img :src="$store.state.i20.image" width="100" />
        <p1> {{ $store.state.i20.name }} </p1>
        <button
          type="button"
          class="btn btn-outline-dark"
          v-on:click="$store.state.i20.amount += 1"
        >
          +
        </button>
        <p2> x{{ $store.state.i20.amount }} </p2>
        <button
          type="button"
          class="btn btn btn-outline-dark"
          v-on:click="$store.state.i12.amount -= 1"
        >
          -
        </button>
      </div>
    </header>
    <hr/>
    <div class="kakzuz2">
    <h2 class="text-center">
      ราคารวม
      {{
        $store.state.sum +
        $store.state.i1.amount * $store.state.i1.price +
        $store.state.i2.amount * $store.state.i2.price +
        $store.state.i3.amount * $store.state.i3.price +
        $store.state.i4.amount * $store.state.i4.price +
        $store.state.i5.amount * $store.state.i5.price +
        $store.state.i6.amount * $store.state.i6.price +
        $store.state.i7.amount * $store.state.i7.price +
        $store.state.i8.amount * $store.state.i8.price +
        $store.state.i9.amount * $store.state.i9.price +
        $store.state.i10.amount * $store.state.i10.price +
        $store.state.i11.amount * $store.state.i11.price +
        $store.state.i12.amount * $store.state.i12.price+
        $store.state.i13.amount * $store.state.i13.price+
        $store.state.i14.amount * $store.state.i14.price+
        $store.state.i15.amount * $store.state.i15.price+
        $store.state.i16.amount * $store.state.i16.price+
        $store.state.i17.amount * $store.state.i17.price+
        $store.state.i18.amount * $store.state.i18.price+
        $store.state.i19.amount * $store.state.i19.price+
        $store.state.i20.amount * $store.state.i20.price
      }}
      บาท
    </h2>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button
        class="btn btn-success"
        v-on:click="$store.state.say('สั่งซื้อสำเร็จ')"
        onClick="javascript:location.reload();"
      >
        ยืนยันการสั่งซื้อ
      </button>
      <button
        to="/"
        class="btn btn-danger"
        v-on:click="$store.state.say('ยกเลิกสำเร็จ')"
        onClick="javascript:location.reload();"
      >
        ยกเลิกการสั่งซื้อ
      </button>
    </div>
    </div>
    <hr/>
  </div>
  
</template>
<style>
.kakzuz{
  margin: 10px;
}
.kakzuz img{
  width: 100px;
  
}
.kakzuz2{
  margin-block-end: 10%;
}
</style>