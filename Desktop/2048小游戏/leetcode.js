
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry=0;
    var l3=new ListNode;
l3.val=(l1.val+l2.val)%10;
carry=Math.floor((l1.val+l2.val)/10);
var ll1=new ListNode;
var ll2=new ListNode;
var l4=new ListNode;
var l5=new ListNode;
    ll1=l1.next;
    ll2=l2.next;
    l5=l3.next;
 
while (ll1!=null||ll2!=null)
{
    if (ll1!=null&&ll2!=null)
    {
    
    l4.val=(ll1.val+ll2.val+carry)%10;
    carry=Math.floor((ll1.val+ll2.val+carry)/10);
    l5=l4;
    ll1=ll1.next;
    ll2=ll2.next;
    l5=l5.next;
    }
    else if (ll1==null&&ll2!=null)
    {
    l4.val=(ll2.val+carry)%10;
    carry=Math.floor((ll2.val+carry)/10);
    l5=l4;
    ll2=ll2.next;
    l4=l4.next;

    }
    else if (ll1!=null&&ll2==null)
    {
    l4.val=(ll1.val+carry)%10;
    carry=Math.floor((ll1.val+carry)/10);
    l5=l4;
    ll1=ll1.next;
    l5=l5.next;
    }
}
return l3;

};