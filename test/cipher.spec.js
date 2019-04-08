describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=> {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz" ,33), "hijklmnopqrstuvwxyzabcdefg")
         });
     it('deberia retornar "678901234" para "123456789" con offset 5', () => {
          assert.equal(cipher.encode( "123456789", 5),"678901234")
        });
        it('deberia retornar "VWXYZAB" para "ABCDEFG" con offset -5', () => {
          assert.equal(cipher.encode("ABCDEFG",-5),"VWXYZAB")
        });
        it('deberia retornar "vwxyzab" para "abcdefg" con offset -5', () => {
          assert.equal(cipher.encode("abcdefg",-5),"vwxyzab") 
        });
        it('deberia retornar "vwxyzab" para "abcdefg" con offset -5', () => {
          assert.equal(cipher.encode("abcdefg",-5),"vwxyzab") 
        });
        it('deberia retornar "67890" para "12345" con offset -5', () => {
          assert.equal(cipher.encode("12345",-5),"67890") 
  });
});


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=> {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=> {
    assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
  });
  it('deberia retornar "123456789" para "678901234"  con offset 5', () => {
    assert.equal(cipher.decode( "678901234", 5),"123456789")
  });
  it('deberia retornar "ABCDEFG" para "VWXYZAB" con offset -5', () => {
    assert.equal(cipher.decode("VWXYZAB",-5),"ABCDEFG")
  });
  it('deberia retornar  "abcdefg" para "vwxyzab" con offset -5', () => {
    assert.equal(cipher.decode("vwxyzab",-5), "abcdefg") 
  });
  it('deberia retornar "abcdefg"  para "vwxyzab" con offset -5', () => {
    assert.equal(cipher.decode("vwxyzab",-5),"abcdefg") 
  });
  it('deberia retornar "12345" para  "67890" con offset -5', () => {
    assert.equal(cipher.decode("67890",-5),"12345") 
});
  });

});
